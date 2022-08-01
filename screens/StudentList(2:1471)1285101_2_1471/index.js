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
      <View style={styles.View_2_1472} />
      <View style={styles.View_2_1473}>
        <View style={styles.View_2_1474}>
          <View style={styles.View_2_1475} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/68231d80-f15a-43b3-a7b8-521fdc0f01e7"
            }}
            style={styles.ImageBackground_2_1476}
          />
          <View style={styles.View_2_1477} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b23adb1f-17bd-4cb0-baaa-bd2a4f918c69"
          }}
          style={styles.ImageBackground_2_1478}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ce12d938-eae8-41f7-86c2-224c93b963d8"
          }}
          style={styles.ImageBackground_2_1482}
        />
        <View style={styles.View_2_1487}>
          <View style={styles.View_2_1488}>
            <Text style={styles.Text_2_1488}>08:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1489}>
        <Text style={styles.Text_2_1489}>Student List</Text>
      </View>
      <View style={styles.View_2_1490}>
        <View style={styles.View_2_1491} />
        <View style={styles.View_2_1492} />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4034ee7f-0df8-4241-ab9d-de987e62e770"
          }}
          style={styles.ImageBackground_22_768}
        />
        <View style={styles.View_2_1493}>
          <Text style={styles.Text_2_1493}>Torik</Text>
        </View>
        <View style={styles.View_2_1495}>
          <Text style={styles.Text_2_1495}>Jarak: 1 KM</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1535}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1237"))
          }
        />
        <View style={styles.View_2_1537}>
          <Text style={styles.Text_2_1537}>Accept</Text>
        </View>
      </View>
      <View style={styles.View_2_1605}>
        <View style={styles.View_2_1606} />
        <View style={styles.View_2_1612} />
        <View style={styles.View_2_1607} />
        <View style={styles.View_2_1608}>
          <Text style={styles.Text_2_1608}>Ibrahim</Text>
        </View>
        <View style={styles.View_2_1609}>
          <Text style={styles.Text_2_1609}>Jarak: 1 KM</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1610}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1237"))
          }
        />
        <View style={styles.View_2_1611}>
          <Text style={styles.Text_2_1611}>Accept</Text>
        </View>
      </View>
      <View style={styles.View_2_1613}>
        <View style={styles.View_2_1614} />
        <View style={styles.View_2_1615} />
        <View style={styles.View_2_1616} />
        <View style={styles.View_2_1617}>
          <Text style={styles.Text_2_1617}>Carly</Text>
        </View>
        <View style={styles.View_2_1618}>
          <Text style={styles.Text_2_1618}>Jarak: 3 KM</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1619}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1237"))
          }
        />
        <View style={styles.View_2_1620}>
          <Text style={styles.Text_2_1620}>Accept</Text>
        </View>
      </View>
      <View style={styles.View_2_1621}>
        <View style={styles.View_2_1622} />
        <View style={styles.View_2_1623} />
        <View style={styles.View_2_1624} />
        <View style={styles.View_2_1625}>
          <Text style={styles.Text_2_1625}>Violet</Text>
        </View>
        <View style={styles.View_2_1626}>
          <Text style={styles.Text_2_1626}>Jarak: 5 KM</Text>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_1627}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_1237"))
          }
        />
        <View style={styles.View_2_1628}>
          <Text style={styles.Text_2_1628}>Accept</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1597}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_193"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/00415f29-dfaa-4213-a37f-9c0fe0206440"
          }}
          style={styles.ImageBackground_I2_1597_33437_5121}
        />
      </TouchableOpacity>
      <View style={styles.View_2_2306}>
        <View style={styles.View_I2_2306_2_2190} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2306_2_2191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_193"))
          }
        >
          <View style={styles.View_I2_2306_2_2192}>
            <View style={styles.View_I2_2306_2_2192_2_156}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d9328efd-e2c1-4058-8ec1-807330c5720e"
                }}
                style={styles.ImageBackground_I2_2306_2_2192_2_157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c672a88-533d-4b5e-8a57-31d2b4df39cd"
                }}
                style={styles.ImageBackground_I2_2306_2_2192_2_158}
              />
            </View>
          </View>
          <View style={styles.View_I2_2306_2_2193}>
            <Text style={styles.Text_I2_2306_2_2193}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2306_2_2194}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_926"))
          }
        >
          <View style={styles.View_I2_2306_2_2195}>
            <Text style={styles.Text_I2_2306_2_2195}>Profile</Text>
          </View>
          <View style={styles.View_I2_2306_2_2196}>
            <View style={styles.View_I2_2306_2_2197}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aab81426-756b-4a8e-9eb2-e241958db396"
                }}
                style={styles.ImageBackground_I2_2306_2_2198}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1aa1ddd-11d0-4aec-80a6-6a925b7014b7"
                }}
                style={styles.ImageBackground_I2_2306_2_2199}
              />
            </View>
            <View style={styles.View_I2_2306_2_2202}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/92e8f5cb-3c5f-43e3-9b53-b9bc4990b81c"
                }}
                style={styles.ImageBackground_I2_2306_2_2203}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ab61190-f9f0-4770-b66f-047cdf284e08"
                }}
                style={styles.ImageBackground_I2_2306_2_2204}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2306_2_2215}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_916"))
          }
        >
          <View style={styles.View_I2_2306_2_2216}>
            <Text style={styles.Text_I2_2306_2_2216}>ON</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4553feba-8d53-42b4-942d-c36f75a5c111"
            }}
            style={styles.ImageBackground_I2_2306_2_2217}
          />
        </TouchableOpacity>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/403b41df-5953-4bec-911d-06c2d4bc8392"
        }}
        style={styles.ImageBackground_22_770}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9e4bb1e9-5952-421d-8a2e-ab9882e8786b"
        }}
        style={styles.ImageBackground_22_769}
      />
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/698012d9-98e5-4fe5-bd30-1ddfb0bb8798"
        }}
        style={styles.ImageBackground_22_771}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_1472: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("122%"),
    minHeight: hp("122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2_1473: {
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
  View_2_1474: {
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
  View_2_1475: {
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
  ImageBackground_2_1476: {
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
  View_2_1477: {
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
  ImageBackground_2_1478: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_1482: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_2_1487: {
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
  View_2_1488: {
    width: wp("13%"),
    minWidth: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1488: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_1489: {
    width: wp("32%"),
    minWidth: wp("32%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34%"),
    top: hp("9%"),
    justifyContent: "flex-start"
  },
  Text_2_1489: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_1490: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("16%")
  },
  View_2_1491: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1492: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  ImageBackground_22_768: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    resizeMode: "cover"
  },
  View_2_1493: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1493: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_1495: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1495: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  TouchableOpacity_2_1535: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_1537: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_1537: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_1605: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("32%")
  },
  View_2_1606: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1612: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1607: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_1608: {
    width: wp("15%"),
    minWidth: wp("15%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1608: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_1609: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1609: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  TouchableOpacity_2_1610: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_1611: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_1611: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_1613: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("47%")
  },
  View_2_1614: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1615: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1616: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_1617: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1617: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_1618: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1618: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  TouchableOpacity_2_1619: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_1620: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_1620: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_1621: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    top: hp("62%")
  },
  View_2_1622: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1623: {
    width: wp("93%"),
    minWidth: wp("93%"),
    height: hp("13%"),
    minHeight: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 0.5
  },
  View_2_1624: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%"),
    backgroundColor: "rgba(217, 217, 217, 1)"
  },
  View_2_1625: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1625: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  View_2_1626: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1626: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.01800000071525574,
    textTransform: "none"
  },
  TouchableOpacity_2_1627: {
    width: wp("62%"),
    minWidth: wp("62%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%"),
    top: hp("7%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_1628: {
    width: wp("11%"),
    minWidth: wp("11%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%"),
    top: hp("8%"),
    justifyContent: "flex-start"
  },
  Text_2_1628: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  TouchableOpacity_2_1597: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1597_33437_5121: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2_2306: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("16%"),
    minHeight: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("111%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_2306_2_2190: {
    flexGrow: 1,
    width: wp("100%"),
    height: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  TouchableOpacity_I2_2306_2_2191: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_I2_2306_2_2192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_2306_2_2192_2_156: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2306_2_2192_2_157: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2306_2_2192_2_158: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2306_2_2193: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_2306_2_2193: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I2_2306_2_2194: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%")
  },
  View_I2_2306_2_2195: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_2306_2_2195: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_2306_2_2196: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I2_2306_2_2197: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2306_2_2198: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2306_2_2199: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2306_2_2202: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_2306_2_2203: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2306_2_2204: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I2_2306_2_2215: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%")
  },
  View_I2_2306_2_2216: {
    width: wp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I2_2306_2_2216: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_2306_2_2217: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_22_770: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("33%"),
    resizeMode: "cover"
  },
  ImageBackground_22_769: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("48%"),
    resizeMode: "cover"
  },
  ImageBackground_22_771: {
    width: wp("27%"),
    minWidth: wp("27%"),
    height: hp("11%"),
    minHeight: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("63%"),
    resizeMode: "cover"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
