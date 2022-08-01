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
      <View style={styles.View_2_4718} />
      <View style={styles.View_2_4719}>
        <Text style={styles.Text_2_4719}>Rating :</Text>
      </View>
      <View style={styles.View_2_4720}>
        <Text style={styles.Text_2_4720}>Ulasan :</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9d6d8b62-3ed7-44e3-8dd3-8595760c55bc"
        }}
        style={styles.ImageBackground_2_4721}
      />
      <View style={styles.View_2_4722} />
      <View style={styles.View_2_4723}>
        <Text style={styles.Text_2_4723}>
          Guru datang tepat waktu. Pembelajaran enak dan menyenangkan
        </Text>
      </View>
      <View style={styles.View_2_4724}>
        <View style={styles.View_2_4725}>
          <View style={styles.View_2_4726} />
          <View style={styles.View_2_4727}>
            <Text style={styles.Text_2_4727}>Tutup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_4728}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4728_117_4026}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/daa7b997-beb1-4fef-9a4e-d56ccb685847"
            }}
            style={styles.ImageBackground_I2_4728_117_4026_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4728_221_8720}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4594"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65a76c8b-b1ab-4e12-8f17-47dba64f7063"
            }}
            style={styles.ImageBackground_I2_4728_221_8720_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4728_221_8723}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5d794005-b129-44d8-aa41-ffab2c48af2f"
            }}
            style={styles.ImageBackground_I2_4728_221_8723_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4728_221_8726}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78d48eb-70ea-4581-8111-fd6f91699d30"
            }}
            style={styles.ImageBackground_I2_4728_221_8726_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4728_221_8729}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b9d0ac13-0c31-47ed-9653-596a83662a80"
            }}
            style={styles.ImageBackground_I2_4728_221_8729_29221_1849}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4729}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4729_221_8689}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dc151681-b679-47e7-9b4f-e8f90ca9fea9"
            }}
            style={styles.ImageBackground_I2_4729_221_8689_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4729_221_8690}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/11cd60be-0339-4c1c-8146-32426d848b96"
            }}
            style={styles.ImageBackground_I2_4729_221_8690_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4729_221_8691}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/547ccd21-371e-4437-ac59-2afed21f9b3f"
            }}
            style={styles.ImageBackground_I2_4729_221_8691_29221_953}
          />
        </TouchableOpacity>
        <View style={styles.View_I2_4729_221_8692}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba2c8bf8-3262-4a6e-9f2e-4fbb2a907733"
            }}
            style={styles.ImageBackground_I2_4729_221_8692_29221_953}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4729_221_8693}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c0eb92aa-3a6a-48ca-852b-911994bc2432"
            }}
            style={styles.ImageBackground_I2_4729_221_8693_29221_1849}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4762}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/165d9f4b-65be-4637-975d-6d18d1aeedcf"
          }}
          style={styles.ImageBackground_I2_4762_29221_953}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_4718: {
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
  View_2_4719: {
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
  Text_2_4719: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_4720: {
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
  Text_2_4720: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  ImageBackground_2_4721: {
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
  View_2_4722: {
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
  View_2_4723: {
    width: wp("78%"),
    minWidth: wp("78%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_2_4723: {
    color: "rgba(39, 39, 39, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_4724: {
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
  View_2_4725: {
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
  View_2_4726: {
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
  View_2_4727: {
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
  Text_2_4727: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_4728: {
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
  TouchableOpacity_I2_4728_117_4026: {
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
  ImageBackground_I2_4728_117_4026_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4728_221_8720: {
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
  ImageBackground_I2_4728_221_8720_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4728_221_8723: {
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
  ImageBackground_I2_4728_221_8723_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4728_221_8726: {
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
  ImageBackground_I2_4728_221_8726_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4728_221_8729: {
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
  ImageBackground_I2_4728_221_8729_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_4729: {
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
  TouchableOpacity_I2_4729_221_8689: {
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
  ImageBackground_I2_4729_221_8689_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4729_221_8690: {
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
  ImageBackground_I2_4729_221_8690_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4729_221_8691: {
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
  ImageBackground_I2_4729_221_8691_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I2_4729_221_8692: {
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
  ImageBackground_I2_4729_221_8692_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4729_221_8693: {
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
  ImageBackground_I2_4729_221_8693_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_4762: {
    width: wp("8%"),
    height: hp("11%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_4762_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
