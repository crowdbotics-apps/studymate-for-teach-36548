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
      <View style={styles.View_2_4607} />
      <View style={styles.View_2_4608}>
        <Text style={styles.Text_2_4608}>Rating :</Text>
      </View>
      <View style={styles.View_2_4609}>
        <Text style={styles.Text_2_4609}>Ulasan :</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e4678b9-0867-4322-afc9-1bfd63477d3a"
        }}
        style={styles.ImageBackground_2_4610}
      />
      <View style={styles.View_2_4611} />
      <View style={styles.View_2_4612}>
        <Text style={styles.Text_2_4612}>
          Pengajaran yang diberikan jelas, Gurunya ramah dan sabar menjelaskan
        </Text>
      </View>
      <View style={styles.View_2_4613}>
        <View style={styles.View_2_4614}>
          <View style={styles.View_2_4615} />
          <View style={styles.View_2_4616}>
            <Text style={styles.Text_2_4616}>Tutup</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_4617}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4617_117_4026}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b574f7b7-892d-48e6-8308-2ead28605b10"
            }}
            style={styles.ImageBackground_I2_4617_117_4026_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4617_221_8720}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4594"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d4d31f6-7cf5-4a9d-8ffb-1823563ff36e"
            }}
            style={styles.ImageBackground_I2_4617_221_8720_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4617_221_8723}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/141b73a7-c3c6-425a-8b25-381afa98b586"
            }}
            style={styles.ImageBackground_I2_4617_221_8723_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4617_221_8726}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bbf19154-87ea-4fc2-82f4-ef5937f6c753"
            }}
            style={styles.ImageBackground_I2_4617_221_8726_29221_1849}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4617_221_8729}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ae0aede-5544-48b4-b6f6-9ac56f0f81b2"
            }}
            style={styles.ImageBackground_I2_4617_221_8729_29221_1849}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4693}>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4693_221_8689}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4576"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/da8de2a6-8c8e-4144-8f40-b402a2526bae"
            }}
            style={styles.ImageBackground_I2_4693_221_8689_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4693_221_8690}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4588"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be512372-2193-4e7d-817c-fd4f40148fd1"
            }}
            style={styles.ImageBackground_I2_4693_221_8690_29221_953}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4693_221_8691}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4582"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8eb26c4-db2d-4e03-8364-c22f39c6173a"
            }}
            style={styles.ImageBackground_I2_4693_221_8691_29221_953}
          />
        </TouchableOpacity>
        <View style={styles.View_I2_4693_221_8692}>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e3d9f73-62ac-4656-9591-63307684f240"
            }}
            style={styles.ImageBackground_I2_4693_221_8692_29221_953}
          />
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4693_221_8693}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_4600"))
          }
        >
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/927b233b-a42e-4ddc-b01f-12453fd3744a"
            }}
            style={styles.ImageBackground_I2_4693_221_8693_29221_1849}
          />
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(0, 0, 0, 0)" },
  View_2: { height: hp("100%") },
  View_2_4607: {
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
  View_2_4608: {
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
  Text_2_4608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_4609: {
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
  Text_2_4609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  ImageBackground_2_4610: {
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
  View_2_4611: {
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
  View_2_4612: {
    width: wp("85%"),
    minWidth: wp("85%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("52%"),
    justifyContent: "flex-start"
  },
  Text_2_4612: {
    color: "rgba(39, 39, 39, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_4613: {
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
  View_2_4614: {
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
  View_2_4615: {
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
  View_2_4616: {
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
  Text_2_4616: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_4617: {
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
  TouchableOpacity_I2_4617_117_4026: {
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
  ImageBackground_I2_4617_117_4026_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4617_221_8720: {
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
  ImageBackground_I2_4617_221_8720_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4617_221_8723: {
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
  ImageBackground_I2_4617_221_8723_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4617_221_8726: {
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
  ImageBackground_I2_4617_221_8726_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  TouchableOpacity_I2_4617_221_8729: {
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
  ImageBackground_I2_4617_221_8729_29221_1849: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_2_4693: {
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
  TouchableOpacity_I2_4693_221_8689: {
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
  ImageBackground_I2_4693_221_8689_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4693_221_8690: {
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
  ImageBackground_I2_4693_221_8690_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4693_221_8691: {
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
  ImageBackground_I2_4693_221_8691_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I2_4693_221_8692: {
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
  ImageBackground_I2_4693_221_8692_29221_953: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  TouchableOpacity_I2_4693_221_8693: {
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
  ImageBackground_I2_4693_221_8693_29221_1849: {
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
