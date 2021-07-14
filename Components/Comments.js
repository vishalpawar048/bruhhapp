import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet } from 'react-native';
import CommentsList from "./CommentsList";
import { Button } from 'react-native-elements';
import { getWebsiteComments, getProductComments } from '../services/getComments';

//Create two comments and on click display relative comments
export default function Comments({ website, productId }) {
  const [websiteComments, setWebsiteComments] = useState({})
  const [productsComments, setProductsComments] = useState({})
  const [showProductsComments, setShowProductsComments] = useState(false)



  const getSiteComments = async (website) => {
    try {
      let res = await getWebsiteComments(website);
      let tempArray = []
      if (res && res.length > 0) {
        res.forEach(ele => {
          tempArray.push({ id: ele._id, name: ele.userId, comment: ele.comment })
        });
      }
      setWebsiteComments(tempArray)
    } catch (error) {
      console.log("error", error)
    }
  }

  const getProdComments = async (productId) => {
    try {
      let res = await getProductComments(productId);
      let tempArray = []
      if (res && res.length > 0) {
        res.forEach(ele => {
          tempArray.push({ id: ele._id, name: ele.userId, comment: ele.comment })
        });
      }
      setProductsComments(tempArray)
    } catch (error) {
      console.log("error", error)
    }
  }

  useEffect(() => {
    getSiteComments(website);
    getProdComments(productId);
  }, [website, productId]);

  const handleWebsiteBtn = () => {
    setShowProductsComments(false)
  }

  const handleProductBtn = () => {
    setShowProductsComments(true)
  }

  return (
    <>
      <View style={styles.CommentBtnWrapper}>
        <Button
          title="Website Reviews"
          type="outline"
          onPress={handleWebsiteBtn}
        />
        <Button
          title="Product Reviews"
          type="outline"
          onPress={handleProductBtn}
        />
      </View>
      <View>
        {
          showProductsComments ? <CommentsList comments={productsComments}></CommentsList> :
            <CommentsList comments={websiteComments}></CommentsList>
        }


        {/* <CommentsList>This can be products coments. Display as per condition</CommentsList>   */}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  CommentBtnWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  btn: {
    marginLeft: 10
  }
});
