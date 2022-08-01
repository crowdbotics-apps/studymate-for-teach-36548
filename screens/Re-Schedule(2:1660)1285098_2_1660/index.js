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
      <View style={styles.View_2_4415}>
        <Text style={styles.Text_2_4415}>Jam:</Text>
      </View>
      <View style={styles.View_2_4416} />
      <View style={styles.View_2_4418} />
      <View style={styles.View_2_4417}>
        <Text style={styles.Text_2_4417}>11.30</Text>
      </View>
      <View style={styles.View_2_4420}>
        <Text style={styles.Text_2_4420}>13.30</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f115d52f-cb61-47ac-9f07-b98b5372d9bd"
        }}
        style={styles.ImageBackground_2_4419}
      />
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1662}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1237"))
        }
      >
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ab92d0a4-84ad-44c3-ad22-cf06d2adbdd8"
          }}
          style={styles.ImageBackground_I2_1662_33437_5121}
        />
      </TouchableOpacity>
      <View style={styles.View_2_1663}>
        <Text style={styles.Text_2_1663}>Re-Schedule</Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/86a5a834-38e8-48d8-b738-36e295f5e10d"
        }}
        style={styles.ImageBackground_2_1664}
      />
      <View style={styles.View_2_1665}>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4489998-56e5-4959-9085-a58e66791f94"
          }}
          style={styles.ImageBackground_2_1666}
        />
        <View style={styles.View_2_1667}>
          <View style={styles.View_2_1668}>
            <Text style={styles.Text_2_1668}>Mon</Text>
          </View>
          <View style={styles.View_2_1669}>
            <Text style={styles.Text_2_1669}>6</Text>
          </View>
          <View style={styles.View_2_1670}>
            <Text style={styles.Text_2_1670}>13</Text>
          </View>
          <View style={styles.View_2_1671}>
            <Text style={styles.Text_2_1671}>20</Text>
          </View>
          <View style={styles.View_2_1672}>
            <Text style={styles.Text_2_1672}>27</Text>
          </View>
        </View>
        <View style={styles.View_2_1673}>
          <View style={styles.View_2_1674}>
            <Text style={styles.Text_2_1674}>7</Text>
          </View>
          <View style={styles.View_2_1675}>
            <Text style={styles.Text_2_1675}>14</Text>
          </View>
          <View style={styles.View_2_1676}>
            <Text style={styles.Text_2_1676}>21</Text>
          </View>
          <View style={styles.View_2_1677}>
            <Text style={styles.Text_2_1677}>28</Text>
          </View>
          <View style={styles.View_2_1678}>
            <Text style={styles.Text_2_1678}>Tue</Text>
          </View>
        </View>
        <View style={styles.View_2_1679}>
          <View style={styles.View_2_1680}>
            <Text style={styles.Text_2_1680}>1</Text>
          </View>
          <View style={styles.View_2_1681}>
            <Text style={styles.Text_2_1681}>8</Text>
          </View>
          <View style={styles.View_2_1682}>
            <Text style={styles.Text_2_1682}>15</Text>
          </View>
          <View style={styles.View_2_1683}>
            <Text style={styles.Text_2_1683}>22</Text>
          </View>
          <View style={styles.View_2_1684}>
            <Text style={styles.Text_2_1684}>29</Text>
          </View>
          <View style={styles.View_2_1685}>
            <Text style={styles.Text_2_1685}>Wed</Text>
          </View>
        </View>
        <View style={styles.View_2_1686}>
          <View style={styles.View_2_1687}>
            <Text style={styles.Text_2_1687}>11</Text>
          </View>
          <View style={styles.View_2_1688}>
            <Text style={styles.Text_2_1688}>18</Text>
          </View>
          <View style={styles.View_2_1689}>
            <Text style={styles.Text_2_1689}>25</Text>
          </View>
          <View style={styles.View_2_1690}>
            <Text style={styles.Text_2_1690}>4</Text>
          </View>
          <View style={styles.View_2_1691}>
            <Text style={styles.Text_2_1691}>Sat</Text>
          </View>
        </View>
        <View style={styles.View_2_1692}>
          <View style={styles.View_2_1693}>
            <Text style={styles.Text_2_1693}>12</Text>
          </View>
          <View style={styles.View_2_1694}>
            <Text style={styles.Text_2_1694}>19</Text>
          </View>
          <View style={styles.View_2_1695}>
            <Text style={styles.Text_2_1695}>26</Text>
          </View>
          <View style={styles.View_2_1696}>
            <Text style={styles.Text_2_1696}>5</Text>
          </View>
          <View style={styles.View_2_1697}>
            <Text style={styles.Text_2_1697}>Sun</Text>
          </View>
        </View>
        <View style={styles.View_2_1698}>
          <View style={styles.View_2_1699}>
            <Text style={styles.Text_2_1699}>9</Text>
          </View>
          <View style={styles.View_2_1700}>
            <Text style={styles.Text_2_1700}>16</Text>
          </View>
          <View style={styles.View_2_1701}>
            <Text style={styles.Text_2_1701}>23</Text>
          </View>
          <View style={styles.View_2_1702}>
            <Text style={styles.Text_2_1702}>30</Text>
          </View>
          <View style={styles.View_2_1703}>
            <Text style={styles.Text_2_1703}>Thu</Text>
          </View>
          <View style={styles.View_2_1704}>
            <Text style={styles.Text_2_1704}>2</Text>
          </View>
        </View>
        <View style={styles.View_2_1705}>
          <View style={styles.View_2_1706}>
            <Text style={styles.Text_2_1706}>10</Text>
          </View>
          <View style={styles.View_2_1707}>
            <Text style={styles.Text_2_1707}>17</Text>
          </View>
          <View style={styles.View_2_1708}>
            <Text style={styles.Text_2_1708}>24</Text>
          </View>
          <View style={styles.View_2_1709}>
            <Text style={styles.Text_2_1709}>Fri</Text>
          </View>
          <View style={styles.View_2_1710}>
            <Text style={styles.Text_2_1710}>3</Text>
          </View>
        </View>
        <View style={styles.View_2_1711}>
          <Text style={styles.Text_2_1711}>Juni 2022</Text>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9528bf35-4390-4b7a-94ca-d584cbfd1ef9"
          }}
          style={styles.ImageBackground_2_1712}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51383819-212e-4116-9c77-bcade3fbc949"
          }}
          style={styles.ImageBackground_2_1714}
        />
      </View>
      <TouchableOpacity
        style={styles.TouchableOpacity_2_1716}
        onPress={() =>
          this.props.navigation.navigate(getNavigationScreen("2_1771"))
        }
      >
        <View style={styles.View_2_1717} />
        <View style={styles.View_2_1718}>
          <Text style={styles.Text_2_1718}>Confirm</Text>
        </View>
      </TouchableOpacity>
      <View style={styles.View_2_1719}>
        <View style={styles.View_2_1720}>
          <View style={styles.View_2_1721} />
          <ImageBackground
            source={{
              uri:
                "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d598ed0e-85bb-4ff6-905a-0dd32b8e01cc"
            }}
            style={styles.ImageBackground_2_1722}
          />
          <View style={styles.View_2_1723} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26c4ed92-6b66-41c4-8968-c8e906caea55"
          }}
          style={styles.ImageBackground_2_1724}
        />
        <ImageBackground
          source={{
            uri:
              "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/309f70b0-eeba-4e21-a892-01daf3c88b9e"
          }}
          style={styles.ImageBackground_2_1728}
        />
        <View style={styles.View_2_1733}>
          <View style={styles.View_2_1734}>
            <Text style={styles.Text_2_1734}>08:00</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_2_1735}>
        <View style={styles.View_2_1736}>
          <View style={styles.View_2_1737}>
            <Text style={styles.Text_2_1737}>Tanggal:</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("122%") },
  View_2_4415: {
    width: wp("7%"),
    minWidth: wp("7%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_2_4415: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4416: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("72%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_4418: {
    width: wp("14%"),
    minWidth: wp("14%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("65%"),
    top: hp("72%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(0, 0, 0, 1)",
    borderWidth: 1
  },
  View_2_4417: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("43%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_2_4417: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_2_4420: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%"),
    top: hp("73%"),
    justifyContent: "flex-start"
  },
  Text_2_4420: {
    color: "rgba(64, 64, 64, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_4419: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("0%"),
    minHeight: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("56%"),
    top: hp("75%")
  },
  TouchableOpacity_2_1662: {
    width: wp("8%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_I2_1662_33437_5121: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("1%")
  },
  View_2_1663: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%"),
    top: hp("28%"),
    justifyContent: "center"
  },
  Text_2_1663: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 19,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_2_1664: {
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
  View_2_1665: {
    width: wp("89%"),
    minWidth: wp("89%"),
    height: hp("28%"),
    minHeight: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%"),
    top: hp("41%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_2_1666: {
    width: wp("7%"),
    minWidth: wp("7%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%"),
    top: hp("12%")
  },
  View_2_1667: {
    width: wp("7%"),
    height: hp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_2_1668: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1668: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1669: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1669: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1670: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1670: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1671: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1671: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1672: {
    width: wp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    justifyContent: "flex-start"
  },
  Text_2_1672: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1673: {
    width: wp("6%"),
    height: hp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  View_2_1674: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1674: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1675: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1675: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1676: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1676: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1677: {
    width: wp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1677: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1678: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1678: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1679: {
    width: wp("7%"),
    height: hp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29%")
  },
  View_2_1680: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1680: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1681: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1681: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1682: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1682: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1683: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1683: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1684: {
    width: wp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1684: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1685: {
    width: wp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1685: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1686: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_2_1687: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1687: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1688: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1688: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1689: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1689: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1690: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1690: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1691: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1691: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1692: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("80%")
  },
  View_2_1693: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1693: {
    color: "rgba(237, 110, 77, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1694: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1694: {
    color: "rgba(237, 110, 77, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1695: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1695: {
    color: "rgba(237, 110, 77, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1696: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1696: {
    color: "rgba(237, 110, 77, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1697: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1697: {
    color: "rgba(237, 110, 77, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1698: {
    width: wp("6%"),
    height: hp("24%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("42%")
  },
  View_2_1699: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1699: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1700: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1700: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1701: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1701: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1702: {
    width: wp("6%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1702: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1703: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1703: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1704: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1704: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1705: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  View_2_1706: {
    width: wp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1706: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1707: {
    width: wp("6%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1707: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1708: {
    width: wp("6%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1708: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1709: {
    width: wp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1709: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1710: {
    width: wp("6%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1710: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 9,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_2_1711: {
    width: wp("16%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("38%"),
    justifyContent: "flex-start"
  },
  Text_2_1711: {
    color: "rgba(0, 0, 0, 1)",
    fontSize: 10,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_2_1712: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("55%")
  },
  ImageBackground_2_1714: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("33%")
  },
  TouchableOpacity_2_1716: {
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
  View_2_1717: {
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
  View_2_1718: {
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
  Text_2_1718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.17500000000000002,
    textTransform: "none"
  },
  View_2_1719: {
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
  View_2_1720: {
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
  View_2_1721: {
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
  ImageBackground_2_1722: {
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
  View_2_1723: {
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
  ImageBackground_2_1724: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("83%")
  },
  ImageBackground_2_1728: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76%")
  },
  View_2_1733: {
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
  View_2_1734: {
    width: wp("13%"),
    minWidth: wp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1734: {
    color: "rgba(38, 38, 38, 1)",
    fontSize: 11,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: -0.2800000011920929,
    textTransform: "none"
  },
  View_2_1735: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%"),
    top: hp("38%")
  },
  View_2_1736: {
    width: wp("12%"),
    minWidth: wp("12%"),
    height: hp("2%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_2_1737: {
    width: wp("12%"),
    minWidth: wp("12%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_2_1737: {
    color: "rgba(15, 57, 59, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
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
