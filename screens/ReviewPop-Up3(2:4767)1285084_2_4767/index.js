import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_2_4768} />
      <View style={styles.View_2_4769}>
        <Text style={styles.Text_2_4769}>Rating :</Text>
      </View>
      <View style={styles.View_2_4770}>
        <Text style={styles.Text_2_4770}>Ulasan :</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3065c8d1-daa6-4a40-a76d-fa9337fedd06"
        }}
        style={styles.ImageBackground_2_4771}
      />
      <View style={styles.View_2_4772} />
      <View style={styles.View_2_4773}>
        <Text style={styles.Text_2_4773}>
          No Complain. Sangat membantu saat diluar kota
        </Text>
      </View>
      <View style={styles.View_2_4774}>
        <View style={styles.View_2_4775}>
          <View style={styles.View_2_4776} />
          <View style={styles.View_2_4777}>
            <Text style={styles.Text_2_4777}>Tutup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_4778}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4778_117_4026}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/17a80654-213e-438d-a748-bdef561da73e"
            }}
            style={styles.ImageBackground_I2_4778_117_4026_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4778_221_8720}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4594"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ebee4d0e-d5d2-4769-9ca9-bce253878d43"
            }}
            style={styles.ImageBackground_I2_4778_221_8720_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4778_221_8723}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2b971f0-df33-4224-8e68-64b703d1e53e"
            }}
            style={styles.ImageBackground_I2_4778_221_8723_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4778_221_8726}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13c7c6ac-01cb-4a20-9c40-580108c2f09d"
            }}
            style={styles.ImageBackground_I2_4778_221_8726_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4778_221_8729}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/564a462d-a295-4d71-a103-b59a0d4a3836"
            }}
            style={styles.ImageBackground_I2_4778_221_8729_29221_1849}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4779}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4779_221_8689}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/55512a57-ba8e-4d7e-9aa8-086ffdd4697a"
            }}
            style={styles.ImageBackground_I2_4779_221_8689_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4779_221_8690}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f08d8a5-ca66-453b-8feb-8eef7a46e837"
            }}
            style={styles.ImageBackground_I2_4779_221_8690_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4779_221_8691}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11a7d706-65f2-4759-a2ef-930dc20c55d5"
            }}
            style={styles.ImageBackground_I2_4779_221_8691_29221_953}
          />
        </TouchableOpacity>
        <View style={styles.View_I2_4779_221_8692}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/13c01168-574d-4d0f-a286-07f07890f2b4"
            }}
            style={styles.ImageBackground_I2_4779_221_8692_29221_953}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4779_221_8693}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1eac4c5-6b80-4c96-a080-076b1f0550c0"
            }}
            style={styles.ImageBackground_I2_4779_221_8693_29221_1849}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_4768: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("100%"),
    minHeight: hp("100%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0
  },
  View_2_4769: {
    width: wp("14%"),
    minWidth: wp("14%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("11%"),
    justifyContent: "flex-start"
  },
  Text_2_4769: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_4770: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%"),
    justifyContent: "flex-start"
  },
  Text_2_4770: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  ImageBackground_2_4771: {
    width: wp("19%"),
    minWidth: wp("19%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("6%")
  },
  View_2_4772: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("24%"),
    minHeight: hp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("50%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_4773: {
    width: wp("57%"),
    minWidth: wp("57%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_2_4773: {
    color: "rgba(39, 39, 39, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_4774: {
    width: wp("100%"),
    height: hp("18%"),
    top: hp("77%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_4775: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("2%")
  },
  View_2_4776: {
    width: wp("68%"),
    minWidth: wp("68%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_4777: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_4777: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_4778: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I2_4778_117_4026: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4778_117_4026_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4778_221_8720: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4778_221_8720_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4778_221_8723: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4778_221_8723_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4778_221_8726: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4778_221_8726_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4778_221_8729: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4778_221_8729_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_4779: {
    width: wp("46%"),
    minWidth: wp("46%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  TouchableOpacity_I2_4779_221_8689: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4779_221_8689_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4779_221_8690: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4779_221_8690_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4779_221_8691: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4779_221_8691_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I2_4779_221_8692: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4779_221_8692_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4779_221_8693: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4779_221_8693_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
