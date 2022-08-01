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
      <View style={styles.View_2_1740}>
        <View style={styles.View_2_1741} />
        <View style={styles.View_2_1742} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b840db4e-b4b4-460e-b15a-f5050e4b7242"
          }}
          style={styles.ImageBackground_22_779}
        />
        <View style={styles.View_2_1743}>
          <Text style={styles.Text_2_1743}>Torik</Text>
        </View>
        <View style={styles.View_2_1744}>
          <Text style={styles.Text_2_1744}>10 Juni 2022 10:00 - 11:30</Text>
        </View>
        <View style={styles.View_2_1745}>
          <Text style={styles.Text_2_1745}>Course : Matematika</Text>
        </View>
        <View style={styles.View_2_1746}>
          <Text style={styles.Text_2_1746}>200.000</Text>
        </View>
        <View style={styles.View_2_1747}>
          <Text style={styles.Text_2_1747}>/ 2 Sesi</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1748}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1237"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c198f42e-2a88-4a7d-ba88-aad9ddf61633"
          }}
          style={styles.ImageBackground_I2_1748_33437_5121}
        />
      </TouchableOpacity>
      <View style={styles.View_2_1749}>
        <Text style={styles.Text_2_1749}>Cancel</Text>
      </View>
      <View style={styles.View_2_1750}>
        <Text style={styles.Text_2_1750}>
          Apakah anda yakin ingin membatalkan kelas ini?
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6c05fe7e-89f5-4123-af32-e75b1b0d5f41"
        }}
        style={styles.ImageBackground_2_1751}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1752}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1794"))
        }
      >
        <View style={styles.View_2_1753} />
        <View style={styles.View_2_1754}>
          <Text style={styles.Text_2_1754}>Confirm</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1755}>
        <View style={styles.View_2_1756}>
          <View style={styles.View_2_1757} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0f172309-a893-4979-b8e0-c83d359c8b44"
            }}
            style={styles.ImageBackground_2_1758}
          />
          <View style={styles.View_2_1759} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9ab38e15-8664-420f-9e94-7708023a9af5"
          }}
          style={styles.ImageBackground_2_1760}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e162e26e-d76e-46d4-b4e7-42b11dff0746"
          }}
          style={styles.ImageBackground_2_1764}
        />
        <View style={styles.View_2_1769}>
          <View style={styles.View_2_1770}>
            <Text style={styles.Text_2_1770}>08:00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_1740: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("39%")
  },
  View_2_1741: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1742: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_22_779: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_2_1743: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1743: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_1744: {
    width: wp("35%"),
    minWidth: wp("35%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_2_1744: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_2_1745: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_2_1745: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  View_2_1746: {
    width: wp("13%"),
    minWidth: wp("13%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("13%"),
    justifyContent: "flex-start"
  },
  Text_2_1746: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.021000000834465026,
    textTransform: "none"
  },
  View_2_1747: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_2_1747: {
    color: "rgba(127, 127, 127, 1)",
    fontSize: 8,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.015000000596046448,
    textTransform: "none"
  },
  TouchableOpacity_2_1748: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1748_33437_5121: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2_1749: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_2_1749: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1750: {
    width: wp("87%"),
    minWidth: wp("87%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("69%"),
    justifyContent: "center"
  },
  Text_2_1750: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1751: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    top: hp("10%"),
    resizeMode: "cover"
  },
  TouchableOpacity_2_1752: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%"),
    top: hp("92%")
  },
  View_2_1753: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_1754: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("1%"),
    justifyContent: "center"
  },
  Text_2_1754: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_1755: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1756: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89%"),
    top: hp("2%")
  },
  View_2_1757: {
    width: wp("5%"),
    minWidth: wp("5%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(38, 38, 38, 1)",
    borderWidth: 1
  },
  ImageBackground_2_1758: {
    width: wp("0%"),
    minWidth: wp("0%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("1%")
  },
  View_2_1759: {
    width: wp("4%"),
    minWidth: wp("4%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(38, 38, 38, 1)"
  },
  ImageBackground_2_1760: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_1764: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_2_1769: {
    width: wp("16%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_1770: {
    width: wp("13%"),
    minWidth: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1770: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
