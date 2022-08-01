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
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2801}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_2419"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dfef8961-f302-4a27-b097-fac2122a3f40"
          }}
          style={styles.ImageBackground_I2_2801_33437_5121}
        />
      </TouchableOpacity>
      <View style={styles.View_2_2802}>
        <Text style={styles.Text_2_2802}>Withdraw</Text>
      </View>
      <View style={styles.View_2_2804}>
        <Text style={styles.Text_2_2804}>Jumlah Penarikan:</Text>
      </View>
      <View style={styles.View_2_4134}>
        <Text style={styles.Text_2_4134}>Min: Rp.50.000,00</Text>
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_2805}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_4336"))
        }
      >
        <View style={styles.View_2_2806} />
        <View style={styles.View_2_2807}>
          <Text style={styles.Text_2_2807}>Confirm</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_3403}>
        <View style={styles.View_I2_3403_2_2190} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_3403_2_2191}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_193"))
          }
        >
          <View style={styles.View_I2_3403_2_2192}>
            <View style={styles.View_I2_3403_2_2192_2_156}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba57223e-4af3-4d6e-83a4-bf5e6683c6a6"
                }}
                style={styles.ImageBackground_I2_3403_2_2192_2_157}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4adcf924-9706-4dee-bc55-f3e314bad853"
                }}
                style={styles.ImageBackground_I2_3403_2_2192_2_158}
              />
            </View>
          </View>
          <View style={styles.View_I2_3403_2_2193}>
            <Text style={styles.Text_I2_3403_2_2193}>Home</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_3403_2_2194}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_926"))
          }
        >
          <View style={styles.View_I2_3403_2_2195}>
            <Text style={styles.Text_I2_3403_2_2195}>Profile</Text>
          </View>
          <View style={styles.View_I2_3403_2_2196}>
            <View style={styles.View_I2_3403_2_2197}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/66212ab7-54e8-4a41-bdc0-842a76a2593c"
                }}
                style={styles.ImageBackground_I2_3403_2_2198}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a55c8a74-df9b-4a6e-b62d-168e05a233b0"
                }}
                style={styles.ImageBackground_I2_3403_2_2199}
              />
            </View>
            <View style={styles.View_I2_3403_2_2202}>
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a05d1b3-5479-4130-86df-f0ee5124042d"
                }}
                style={styles.ImageBackground_I2_3403_2_2203}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fcb28675-081b-4404-af0d-b8beafb9fcde"
                }}
                style={styles.ImageBackground_I2_3403_2_2204}
              />
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_3403_2_2215}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_916"))
          }
        >
          <View style={styles.View_I2_3403_2_2216}>
            <Text style={styles.Text_I2_3403_2_2216}>ON</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3c946261-73f7-4c87-986c-c559b64568d2"
            }}
            style={styles.ImageBackground_I2_3403_2_2217}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4040}>
        <View style={styles.View_I2_4040_2_3490} />
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4040_2_3491}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3530"))
          }
        >
          <View style={styles.View_I2_4040_2_3492}>
            <View style={styles.View_I2_4040_2_3493} />
            <View style={styles.View_I2_4040_2_3494}>
              <Text style={styles.Text_I2_4040_2_3494}>OVO</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8cf9cfe9-504d-46cf-960d-19658f30d60e"
              }}
              style={styles.ImageBackground_I2_4040_2_3495}
            />
            <View style={styles.View_I2_4040_2_3498}>
              <View style={styles.View_I2_4040_2_3498_0_848}>
                <View style={styles.View_I2_4040_2_3498_0_849} />
                <View style={styles.View_I2_4040_2_3498_0_850}>
                  <View style={styles.View_I2_4040_2_3498_0_857}>
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/35094b56-caef-4e25-ac30-9a17449d9c88"
                      }}
                      style={styles.ImageBackground_I2_4040_2_3498_0_853}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8f149c81-c3d2-4438-b082-e4459d0d64b6"
                      }}
                      style={styles.ImageBackground_I2_4040_2_3498_0_856}
                    />
                    <ImageBackground
                      source={{
                        uri:
                          "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28c37750-9079-4098-a339-66d1ba0b68c8"
                      }}
                      style={styles.ImageBackground_I2_4040_2_3498_0_858}
                    />
                  </View>
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <View style={styles.View_I2_4040_2_3499}>
          <TouchableOpacity
            style={styles.TouchableOpacity_I2_4040_2_3500}
            onPress={() =>
              this.props.navigation.navigate(getNavigationScreen("2_3572"))
            }
          >
            <View style={styles.View_I2_4040_2_3501} />
            <View style={styles.View_I2_4040_2_3502}>
              <Text style={styles.Text_I2_4040_2_3502}>DANA</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1b7e0a3-d234-46cb-9905-650e2cf95833"
              }}
              style={styles.ImageBackground_I2_4040_2_3503}
            />
          </TouchableOpacity>
          <View style={styles.View_I2_4040_2_3506}>
            <View style={styles.View_I2_4040_2_3506_0_733}>
              <View style={styles.View_I2_4040_2_3506_0_734} />
              <View style={styles.View_I2_4040_2_3506_0_735}>
                <View style={styles.View_I2_4040_2_3506_0_742}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4bfbbb14-1bf3-4a4e-9bc9-29e6f1f9dfc4"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3506_0_738}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bfe93e2-a81b-4d9e-92b7-a58253448ef4"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3506_0_741}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c24c8fb-8e01-404c-b18a-00e6cc6f9905"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3506_0_745}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b329ac46-097f-4b82-b59e-f10de56e8e66"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3506_0_746}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/918d9a46-1932-4078-99b2-3687287ba987"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3506_0_749}
                  />
                </View>
              </View>
            </View>
          </View>
        </View>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4040_2_3507}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3614"))
          }
        >
          <View style={styles.View_I2_4040_2_3508}>
            <View style={styles.View_I2_4040_2_3509} />
            <View style={styles.View_I2_4040_2_3510}>
              <Text style={styles.Text_I2_4040_2_3510}>Gopay</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06576662-f7f0-4c2b-8b11-1473843b56da"
              }}
              style={styles.ImageBackground_I2_4040_2_3511}
            />
          </View>
          <View style={styles.View_I2_4040_2_3514}>
            <View style={styles.View_I2_4040_2_3514_0_773}>
              <View style={styles.View_I2_4040_2_3514_0_774} />
              <View style={styles.View_I2_4040_2_3514_0_775}>
                <View style={styles.View_I2_4040_2_3514_0_780}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/29d3fc3c-cdfb-4094-b554-efa6765a05e8"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_778}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0ef53241-2167-4a4f-bcf4-afdc29b77640"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_779}
                  />
                </View>
                <View style={styles.View_I2_4040_2_3514_0_787}>
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bed0e2f6-2978-4716-81ed-507558c1848f"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_783}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/716d7d2c-ef06-4b78-a592-8c136e0d1d06"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_786}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7de515e6-7bee-4c36-ac65-49d3b1b702ea"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_790}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/53d46292-a4fb-4593-a212-e78bef796b5e"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_793}
                  />
                  <ImageBackground
                    source={{
                      uri:
                        "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/47febc22-1d82-4abc-925b-06a1b590438e"
                    }}
                    style={styles.ImageBackground_I2_4040_2_3514_0_794}
                  />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4040_2_3515}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3656"))
          }
        >
          <View style={styles.View_I2_4040_2_3516}>
            <View style={styles.View_I2_4040_2_3517} />
            <View style={styles.View_I2_4040_2_3518}>
              <Text style={styles.Text_I2_4040_2_3518}>Virtual Account</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/18759c3a-0733-48f4-aa9d-e453c0970ff8"
              }}
              style={styles.ImageBackground_I2_4040_2_3519}
            />
          </View>
          <View style={styles.View_I2_4040_2_3522}>
            <Text style={styles.Text_I2_4040_2_3522}>VA</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.TouchableOpacity_I2_4040_2_3523}
          onPress={() =>
            this.props.navigation.navigate(getNavigationScreen("2_3698"))
          }
        >
          <View style={styles.View_I2_4040_2_3524}>
            <View style={styles.View_I2_4040_2_3525} />
            <View style={styles.View_I2_4040_2_3526}>
              <Text style={styles.Text_I2_4040_2_3526}>Pay-Mate</Text>
            </View>
            <ImageBackground
              source={{
                uri:
                  "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/58322d4d-608e-42e4-9b0c-8c40e8e05380"
              }}
              style={styles.ImageBackground_I2_4040_2_3527}
            />
          </View>
          <View style={styles.View_I2_4040_2_3529}>
            <Text style={styles.Text_I2_4040_2_3529}>Pay Mate</Text>
          </View>
        </TouchableOpacity>
      </View>
      <View style={styles.View_2_4131} />
      <View style={styles.View_2_2810}>
        <View style={styles.View_2_2811}>
          <View style={styles.View_2_2812} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/87920a5b-2570-48cc-9431-5929a9d253f8"
            }}
            style={styles.ImageBackground_2_2813}
          />
          <View style={styles.View_2_2814} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ca60dbd5-b627-4e5f-b33c-f1fcb2eb3c3e"
          }}
          style={styles.ImageBackground_2_2815}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d122563a-2120-4061-ad72-71759c2f0396"
          }}
          style={styles.ImageBackground_2_2819}
        />
        <View style={styles.View_2_2824}>
          <View style={styles.View_2_2825}>
            <Text style={styles.Text_2_2825}>08:00</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  TouchableOpacity_2_2801: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_2801_33437_5121: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2_2802: {
    width: wp("26%"),
    minWidth: wp("26%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("37%"),
    top: hp("10%"),
    justifyContent: "center"
  },
  Text_2_2802: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_2804: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("66%"),
    justifyContent: "flex-start"
  },
  Text_2_2804: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4134: {
    width: wp("24%"),
    minWidth: wp("24%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71%"),
    top: hp("76%"),
    justifyContent: "flex-start"
  },
  Text_2_4134: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_2_2805: {
    width: wp("59%"),
    minWidth: wp("59%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("21%"),
    top: hp("92%")
  },
  View_2_2806: {
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
  View_2_2807: {
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
  Text_2_2807: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_3403: {
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
  View_I2_3403_2_2190: {
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
  TouchableOpacity_I2_3403_2_2191: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%"),
    top: hp("2%")
  },
  View_I2_3403_2_2192: {
    width: wp("6%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_3403_2_2192_2_156: {
    flexGrow: 1,
    width: wp("5%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_I2_3403_2_2192_2_157: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_3403_2_2192_2_158: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3403_2_2193: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_3403_2_2193: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I2_3403_2_2194: {
    flexGrow: 1,
    width: wp("6%"),
    height: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%"),
    top: hp("2%")
  },
  View_I2_3403_2_2195: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "center"
  },
  Text_I2_3403_2_2195: {
    color: "rgba(89, 89, 89, 1)",
    fontSize: 6,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I2_3403_2_2196: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I2_3403_2_2197: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_3403_2_2198: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_3403_2_2199: {
    width: wp("5%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_3403_2_2202: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_3403_2_2203: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_3403_2_2204: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  TouchableOpacity_I2_3403_2_2215: {
    flexGrow: 1,
    width: wp("15%"),
    height: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("1%")
  },
  View_I2_3403_2_2216: {
    width: wp("5%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    justifyContent: "center"
  },
  Text_I2_3403_2_2216: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_3403_2_2217: {
    width: wp("15%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_2_4040: {
    width: wp("98%"),
    minWidth: wp("98%"),
    height: hp("43%"),
    minHeight: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("18%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4040_2_3490: {
    flexGrow: 1,
    width: wp("98%"),
    height: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(224, 224, 224, 1)"
  },
  TouchableOpacity_I2_4040_2_3491: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("2%")
  },
  View_I2_4040_2_3492: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_4040_2_3493: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3494: {
    width: wp("7%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3494: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_4040_2_3495: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_I2_4040_2_3498: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4040_2_3498_0_848: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_4040_2_3498_0_849: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(76, 52, 148, 1)",
    borderColor: "rgba(230, 231, 232, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3498_0_850: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_I2_4040_2_3498_0_857: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3498_0_853: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3498_0_856: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I2_4040_2_3498_0_858: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_I2_4040_2_3499: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("10%")
  },
  TouchableOpacity_I2_4040_2_3500: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_4040_2_3501: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3502: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3502: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_4040_2_3503: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_I2_4040_2_3506: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4040_2_3506_0_733: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_4040_2_3506_0_734: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(16, 142, 233, 1)",
    borderColor: "rgba(230, 231, 232, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3506_0_735: {
    width: wp("9%"),
    minWidth: wp("9%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_I2_4040_2_3506_0_742: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3506_0_738: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3506_0_741: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_4040_2_3506_0_745: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_I2_4040_2_3506_0_746: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_I2_4040_2_3506_0_749: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  TouchableOpacity_I2_4040_2_3507: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("18%")
  },
  View_I2_4040_2_3508: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_4040_2_3509: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3510: {
    width: wp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3510: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_4040_2_3511: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_I2_4040_2_3514: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I2_4040_2_3514_0_773: {
    flexGrow: 1,
    width: wp("12%"),
    height: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_I2_4040_2_3514_0_774: {
    width: wp("12%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(230, 231, 232, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3514_0_775: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("1%"),
    minHeight: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%")
  },
  View_I2_4040_2_3514_0_780: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3514_0_778: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3514_0_779: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_I2_4040_2_3514_0_787: {
    width: wp("7%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_4040_2_3514_0_783: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_I2_4040_2_3514_0_786: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_I2_4040_2_3514_0_790: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_I2_4040_2_3514_0_793: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_I2_4040_2_3514_0_794: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  TouchableOpacity_I2_4040_2_3515: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("26%")
  },
  View_I2_4040_2_3516: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_4040_2_3517: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_I2_4040_2_3518: {
    width: wp("22%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3518: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_4040_2_3519: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_I2_4040_2_3522: {
    width: wp("6%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3522: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  TouchableOpacity_I2_4040_2_3523: {
    flexGrow: 1,
    width: wp("90%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    top: hp("35%")
  },
  View_I2_4040_2_3524: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_I2_4040_2_3525: {
    width: wp("90%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_I2_4040_2_3526: {
    width: wp("14%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%"),
    justifyContent: "flex-start"
  },
  Text_I2_4040_2_3526: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_I2_4040_2_3527: {
    width: wp("5%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("82%")
  },
  View_I2_4040_2_3529: {
    width: wp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%"),
    justifyContent: "center"
  },
  Text_I2_4040_2_3529: {
    color: "rgba(229, 99, 153, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4131: {
    width: wp("90%"),
    minWidth: wp("90%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("71%"),
    backgroundColor: "rgba(250, 250, 250, 1)",
    borderColor: "rgba(191, 191, 191, 1)",
    borderWidth: 1
  },
  View_2_2810: {
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
  View_2_2811: {
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
  View_2_2812: {
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
  ImageBackground_2_2813: {
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
  View_2_2814: {
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
  ImageBackground_2_2815: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_2819: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_2_2824: {
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
  View_2_2825: {
    width: wp("13%"),
    minWidth: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_2825: {
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
