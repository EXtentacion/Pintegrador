import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Modal, TouchableOpacity,Dimensions } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";



const There = ({ navigation, route }) => {
  const [show, setShow] = useState(route.params?.showPopup || false);
  const { width, height } = Dimensions.get("window");

  const ModalPoup = ({ visible, children }) => {
    const [ShowModal, setShowModal] = useState(visible);
    useEffect(() => {
      toggleModal();
    }, [visible]);
    const toggleModal = () => {
      if (visible) {
        setShowModal(true);
      } else {
        setShowModal(false);
      }
    };
    return (
      <Modal transparent visible={ShowModal} animationType="fade">
        <View style={styles.modalbackground}>
          <View style={styles.modalContainer}>{children}</View>
        </View>
      </Modal>
    );
  };

  function PopDown() {
    const [visible, setVisible] = useState(false);
    return (
      <View>
        <ModalPoup visible={visible}>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                width: 40,
                height: 5,
                backgroundColor: "#0080FB",
                borderRadius: 10,
                marginBottom: 20,
              }}
            >
              <TouchableOpacity onPress={() => setVisible(false)}>
                <FontAwesome5 name="times" size={20} color="#0080FB" />
              </TouchableOpacity>
            </View>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              color: "#0080FB",
            }}
          >
            Select Language
          </Text>
        </ModalPoup>
        <TouchableOpacity
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            zIndex: 1000,
            marginTop: height * 0.03,
          }}
          onPress={() => setVisible(true)}
        >
          <FontAwesome5 name="globe" size={26} color="black" />
        </TouchableOpacity>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      {show && <PopDown />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    fontSize: 30,
  },
  modalbackground: {
    backgroundColor: "rgba(0,0,0,0.5)",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalContainer: {
    width: "60%",
    backgroundColor: "white",
    borderRadius: 10,
    paddingHorizontal: 20,
    elevation: 20,
    paddingVertical: 30,
    justifyContent: "center",
    alignItems: "center",
    },
});

export default There;
