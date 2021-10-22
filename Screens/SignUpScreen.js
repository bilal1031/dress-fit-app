import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Dimensions,
  ScrollView,
  Text,
  TouchableOpacity,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Button, TextInput, HelperText } from "react-native-paper";
import { StatusBar } from "expo-status-bar";
import colors from "../Utilites/colors";
import { Formik } from "formik";
import FormTextInput from "../Componenets/FormTextInput";
import CheckboxWithDesc from "../Componenets/CheckboxWithDesc";
import { Ionicons } from "@expo/vector-icons";

const height = Dimensions.get("screen").height;

const SignUpScreen = (props) => {
  const [isAgree, setIsAgree] = useState(false);
  const [isInvalidEmail, setIsInvalidEmail] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const isLoading = false;
  const navigation = props.navigation;
  const handleSubmit = (data, { resetForm }) => {
    if (
      isLoading ||
      !data.username ||
      !data.email ||
      !data.password ||
      !data.confirmPassword ||
      !validateEmail(data.email)
    )
      return;

    dispatch(
      Signup(
        data.username,
        imageUri,
        data.email.toLowerCase(),
        data.password.toLowerCase(),
        resetForm,
        setImageUri
      )
    );
  };
  const handleNavigation = () => {
    navigation.navigate("signIn");
  };
  const handleFacebookSignUp = () => {};
  const handleGoogleSignUp = () => {};
  return (
    <SafeAreaView style={styles.maincontainer}>
      <StatusBar />
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.topView}>
          <Text style={styles.descp}>
            {" "}
            Create an account and discover the benefits
          </Text>
        </View>
        <View>
          <Formik
            initialValues={{
              firstname: "",
              lastname: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
            onSubmit={handleSubmit}
          >
            {({ handleSubmit, setFieldValue, values, touched }) => (
              <View style={styles.midView}>
                <FormTextInput
                  mode="flat"
                  label="First Name"
                  title="firstname"
                  error={!values["firstname"] && touched["firstname"]}
                  style={styles.textField}
                  theme={{
                    colors: { primary: colors.primary },
                  }}
                />
                <FormTextInput
                  mode="flat"
                  label="Last Name"
                  title="lastname"
                  error={!values["lastname"] && touched["lastname"]}
                  style={styles.textField}
                  theme={{
                    colors: { primary: colors.primary },
                  }}
                />

                <FormTextInput
                  mode="flat"
                  label="Email"
                  title="email"
                  placeholder="xxxx-xxx-xxx@cuilahore.edu.pk"
                  keyboardType="email-address"
                  error={
                    (!values["email"] && touched["email"]) || !isInvalidEmail
                  }
                  onChangeText={(email) => {
                    setFieldValue("email", email);

                    if (!validateEmail(email)) setIsInvalidEmail(false);
                    else setIsInvalidEmail(true);
                  }}
                  style={styles.textField}
                  theme={{
                    colors: { primary: colors.primary },
                  }}
                />

                <FormTextInput
                  mode="flat"
                  label="Password"
                  title="password"
                  secureTextEntry={!showPassword}
                  style={styles.textField}
                  error={!values["password"] && touched["password"]}
                  theme={{
                    colors: { primary: colors.primary },
                  }}
                  right={
                    <TextInput.Icon
                      name={() => (
                        <Ionicons
                          name={
                            showPassword
                              ? "ios-eye-off-outline"
                              : "ios-eye-outline"
                          }
                          size={20}
                          color={colors.darkgrey}
                        />
                      )}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />

                <FormTextInput
                  mode="flat"
                  label="Confirm Password"
                  title="confirmPassword"
                  secureTextEntry={!showPassword}
                  style={styles.textField}
                  error={values["password"] !== values["confirmPassword"]}
                  theme={{
                    colors: { primary: colors.primary },
                  }}
                  right={
                    <TextInput.Icon
                      name={() => (
                        <Ionicons
                          name={
                            showPassword
                              ? "ios-eye-off-outline"
                              : "ios-eye-outline"
                          }
                          size={20}
                          color={colors.darkgrey}
                        />
                      )}
                      onPress={() => setShowPassword(!showPassword)}
                    />
                  }
                />
              </View>
            )}
          </Formik>
        </View>
        <CheckboxWithDesc
          status={isAgree}
          fontSize={14}
          style={{ marginVertical: 10 }}
          descriptionComp={<Text>I agree to terms and conditions</Text>}
          handlePress={() => {
            setIsAgree(!isAgree);
          }}
        />
        <View style={styles.bottomView}>
          <View style={styles.buttonDiv}>
            <View style={styles.socialButtonDiv}>
              <Button
                mode="contained"
                loading={isLoading}
                // disabled={!isAgree}
                onPress={handleSubmit}
                style={styles.socialbutton}
                theme={{
                  colors: { primary: colors.facbook },
                }}
                icon="alpha-f-circle"
              >
                Facebook
              </Button>
              <Button
                mode="contained"
                loading={isLoading}
                // disabled={!isAgree}
                onPress={handleSubmit}
                style={styles.socialbutton}
                theme={{
                  colors: { primary: colors.google },
                }}
                icon="alpha-g-circle"
              >
                Google
              </Button>
            </View>
            <Button
              mode="contained"
              loading={isLoading}
              disabled={!isAgree}
              onPress={handleSubmit}
              style={styles.button}
              theme={{
                colors: { primary: colors.primary },
              }}
            >
              sign up
            </Button>
          </View>
          <TouchableOpacity onPress={handleNavigation}>
            <Text style={{ fontSize: 14, fontWeight: "bold" }}>
              Are you already a member?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  maincontainer: {
    flex: 1,
    justifyContent: "center",
  },
  scrollView: {
    flex: 1,
    flexGrow: 1,
    // backgroundColor: "dodgerblue",
  },
  topView: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: height * 0.15,
    // backgroundColor: "tomato",
    paddingLeft: 30,
    paddingRight: 30,
    marginTop: 10,
  },
  midView: {
    width: "100%",
    height: height * 0.5,
    // backgroundColor: "gold",
    paddingRight: 10,
    paddingLeft: 10,
    justifyContent: "space-between",
  },
  bottomView: {
    width: "100%",
    height: height * 0.2,
    // backgroundColor: "violet",
    alignItems: "center",
    justifyContent: "space-around",
    marginBottom: 10,
  },
  descp: {
    fontSize: 24,
    textAlign: "center",
  },
  button: {
    borderRadius: 50,
    width: "90%",
    alignSelf: "center",
  },
  buttonDiv: {
    width: "100%",
  },
  socialButtonDiv: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  socialbutton: {
    width: "40%",
    borderRadius: 50,
  },
});
