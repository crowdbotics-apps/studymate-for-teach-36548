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
      <View style={styles.View_2_2420} />
      <View style={styles.View_2_2421}>
        <View style={styles.View_2_2422}>
          <View style={styles.View_2_2423} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a0534861-d9b2-4fe2-ba1f-f368b7e19bb5"
            }}
            style={styles.ImageBackground_2_2424}
          />
          <View style={styles.View_2_2425} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cd0bb931-5f7c-49e6-a421-5d70bed76f59"
          }}
          style={styles.ImageBackground_2_2426}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a6552af7-422a-4996-89d5-0399df286f3b"
          }}
          style={styles.ImageBackground_2_2430}
        />
        <View style={styles.View_2_2435}>
          <View style={styles.View_2_2436}>
            <Text style={styles.Text_2_2436}>08:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_2437}>
        <Text style={styles.Text_2_2437}>Profile</Text>
      </View>
      <View style={styles.View_2_2438}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4601b325-492b-4047-903b-6f17ed04efb5"
          }}
          style={styles.ImageBackground_2_2439}
        />
        <View style={styles.View_2_2440}>
          <Text style={styles.Text_2_2440}>Change Profile Photo</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f047bca-1955-4703-a296-9d96f7a0e6c5"
          }}
          style={styles.ImageBackground_22_766}
        />
      </View>
      <View style={styles.View_2_2441}>
        <View style={styles.View_2_2442}>
          <Text style={styles.Text_2_2442}>Nama</Text>
        </View>
        <View style={styles.View_2_2443} />
        <View style={styles.View_2_2444}>
          <Text style={styles.Text_2_2444}>Nama</Text>
        </View>
      </View>
      <View style={styles.View_2_2445}>
        <View style={styles.View_I2_2445_2_2190} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2445_2_2191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_193"))
          }
        >
          <View style={styles.View_I2_2445_2_2192}>
            <View style={styles.View_I2_2445_2_2192_2_156}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1bbb60e4-3762-41ff-99d7-16e33d30ab2e"
                }}
                style={styles.ImageBackground_I2_2445_2_2192_2_157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f1259816-616d-4f04-8d03-0f9519bbd669"
                }}
                style={styles.ImageBackground_I2_2445_2_2192_2_158}
              />
            </View>
          </View>
          <View style={styles.View_I2_2445_2_2193}>
            <Text style={styles.Text_I2_2445_2_2193}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2445_2_2194}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_926"))
          }
        >
          <View style={styles.View_I2_2445_2_2195}>
            <Text style={styles.Text_I2_2445_2_2195}>Profile</Text>
          </View>
          <View style={styles.View_I2_2445_2_2196}>
            <View style={styles.View_I2_2445_2_2197}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b99f8d29-da95-4173-a40d-ecfba23e9364"
                }}
                style={styles.ImageBackground_I2_2445_2_2198}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6b8e2a20-c5f6-4c99-8899-f9c87e604f6f"
                }}
                style={styles.ImageBackground_I2_2445_2_2199}
              />
            </View>
            <View style={styles.View_I2_2445_2_2202}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a58b07d-79f0-46bf-80ea-540df4ecaefe"
                }}
                style={styles.ImageBackground_I2_2445_2_2203}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca4f2020-458d-4fb4-b263-d7a7971a00ae"
                }}
                style={styles.ImageBackground_I2_2445_2_2204}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_2445_2_2215}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_916"))
          }
        >
          <View style={styles.View_I2_2445_2_2216}>
            <Text style={styles.Text_I2_2445_2_2216}>ON</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f39e87b-9265-4e1a-8403-2ff7bf5a85fc"
            }}
            style={styles.ImageBackground_I2_2445_2_2217}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_2479}>
        <View style={styles.View_2_2480}>
          <Text style={styles.Text_2_2480}>Saldo</Text>
        </View>
        <View style={styles.View_2_2481} />
        <View style={styles.View_2_2482}>
          <Text style={styles.Text_2_2482}>Rp.xxx.xxx.xx</Text>
        </View>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2446}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_4421"))
        }
      >
        <View style={styles.View_2_2447}>
          <View style={styles.View_2_2448} />
          <View style={styles.View_2_2449}>
            <Text style={styles.Text_2_2449}>Feedback &amp; Review</Text>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_3269}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_3270}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_926"))
          }
        >
          <View style={styles.View_2_3271} />
          <View style={styles.View_2_3272}>
            <Text style={styles.Text_2_3272}>View Less</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_2484}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_2485}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3277"))
          }
        >
          <View style={styles.View_2_2486} />
          <View style={styles.View_2_2487}>
            <Text style={styles.Text_2_2487}>Detail Saldo</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_2488}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_2800"))
          }
        >
          <View style={styles.View_2_2489} />
          <View style={styles.View_2_2490}>
            <Text style={styles.Text_2_2490}>Withdraw</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_2450}>
        <TouchableOpacity
          style={styles.TouchableOpacity_2_2451}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_14"))
          }
        >
          <View style={styles.View_2_2452} />
          <View style={styles.View_2_2453}>
            <Text style={styles.Text_2_2453}>Log Out</Text>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_2420: {
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
  View_2_2421: {
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
  View_2_2422: {
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
  View_2_2423: {
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
  ImageBackground_2_2424: {
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
  View_2_2425: {
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
  ImageBackground_2_2426: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_2430: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_2_2435: {
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
  View_2_2436: {
    width: wp("13%"),
    minWidth: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2436: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_2437: {
    width: wp("18%"),
    minWidth: wp("18%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("41%"),
    top: hp("10%"),
    justifyContent: "flex-start"
  },
  Text_2_2437: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.03600000143051148,
    textTransform: "none"
  },
  View_2_2438: {
    width: wp("38%"),
    minWidth: wp("38%"),
    height: hp("19%"),
    minHeight: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("17%")
  },
  ImageBackground_2_2439: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("0%")
  },
  View_2_2440: {
    width: wp("38%"),
    minWidth: wp("38%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("16%"),
    justifyContent: "flex-start"
  },
  Text_2_2440: {
    color: "rgba(46, 49, 146, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.024000000953674317,
    textTransform: "none"
  },
  ImageBackground_22_766: {
    width: wp("25%"),
    minWidth: wp("25%"),
    height: hp("14%"),
    minHeight: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("0%")
  },
  View_2_2441: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("41%")
  },
  View_2_2442: {
    width: wp("10%"),
    minWidth: wp("10%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2442: {
    color: "rgba(15, 57, 59, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.014000000208616258,
    textTransform: "none"
  },
  View_2_2443: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_2_2444: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_2444: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_2445: {
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
  View_I2_2445_2_2190: {
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
  TouchableOpacity_I2_2445_2_2191: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_I2_2445_2_2192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_2445_2_2192_2_156: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_2445_2_2192_2_157: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2445_2_2192_2_158: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2445_2_2193: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_2445_2_2193: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I2_2445_2_2194: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%")
  },
  View_I2_2445_2_2195: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_2445_2_2195: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_2445_2_2196: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I2_2445_2_2197: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2445_2_2198: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2445_2_2199: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_2445_2_2202: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_2445_2_2203: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_2445_2_2204: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I2_2445_2_2215: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%")
  },
  View_I2_2445_2_2216: {
    width: wp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I2_2445_2_2216: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_2445_2_2217: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_2479: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("51%")
  },
  View_2_2480: {
    width: wp("9%"),
    minWidth: wp("9%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2480: {
    color: "rgba(15, 57, 59, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.014000000208616258,
    textTransform: "none"
  },
  View_2_2481: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_2_2482: {
    width: wp("16%"),
    minWidth: wp("16%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_2_2482: {
    color: "rgba(217, 217, 217, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  TouchableOpacity_2_2446: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("68%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_2_2447: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_2_2448: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_2449: {
    width: wp("45%"),
    minWidth: wp("45%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_2449: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_3269: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("88%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_2_3270: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%")
  },
  View_2_3271: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_3272: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_3272: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_2484: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_2_2485: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_2_2486: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_2487: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_2487: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  TouchableOpacity_2_2488: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("50%"),
    top: hp("1%")
  },
  View_2_2489: {
    width: wp("41%"),
    minWidth: wp("41%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(46, 49, 146, 1)"
  },
  View_2_2490: {
    width: wp("27%"),
    minWidth: wp("27%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_2490: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_2450: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("95%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  TouchableOpacity_2_2451: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23%"),
    top: hp("1%")
  },
  View_2_2452: {
    width: wp("44%"),
    minWidth: wp("44%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(235, 87, 87, 1)"
  },
  View_2_2453: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_2453: {
    color: "rgba(250, 250, 250, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
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
