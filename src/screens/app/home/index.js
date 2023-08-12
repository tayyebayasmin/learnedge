import React, { useState } from "react";
import { View, FlatList, TouchableOpacity } from "react-native";
import { ScreenWrapper } from "react-native-screen-wrapper";
import { height } from "../../../utills/Dimension";
import { Arrow, Menu, Profile, Search } from "../../../assets/SVG";
import {
  CustomText,
  Instructor,
  RecentLearnedCard,
  SubjectCard,
} from "../../../components";
import AppColors from "../../../utills/AppColors";
import { CommonStyles } from "../../../utills/CommonStyles";
import Input from "../../../components/input";
import {
  dummyInstructorData,
  dummyLiveClassesData,
  dummyRecentLearned,
  dummySubjectData,
} from "../../../utills/dummyData";
import LiveClasses from "../../../components/live-classes";
import { FontFamily } from "../../../utills/Fontfamily";
import styles from "./styles";
import { ScreenNames } from "../../../routes";

const Home = ({ navigation }) => {
  const [search, setSearch] = useState("");

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity>
          <Menu />
        </TouchableOpacity>
        <TouchableOpacity>
          <Profile />
        </TouchableOpacity>
      </View>
      <ScreenWrapper
        barStyle="dark-content"
        statusBarColor="white"
        scrollType="scroll"
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <CustomText
          size={5}
          font={FontFamily.appFontMedium}
          color={AppColors.gray}
          lineHeight={height(4)}
          textStyles={CommonStyles.paddingHorizontal_2}
        >
          Hello,
        </CustomText>
        <CustomText
          size={6}
          font={FontFamily.appFontMedium}
          color={AppColors.black}
          lineHeight={height(4)}
          textStyles={CommonStyles.paddingHorizontal_2}
        >
          David Shelton
        </CustomText>
        <View style={styles.search}>
          <Input
            containerStyle={styles.outerContainerInput}
            innerContainerStyle={styles.searchInput}
            placeholder="Search..."
            value={search}
            // onChange={(value) => }
          />
          <View style={styles.searchIcon}>
            <Search />
          </View>
        </View>
        <View
          style={[
            CommonStyles.rowJustifySpaceBtw,
            CommonStyles.marginHorizontal_2,
          ]}
        >
          <CustomText
            lineHeight={height(5)}
            size={4.5}
            font={FontFamily.appFontMedium}
          >
            Subjects
          </CustomText>
          <TouchableOpacity style={styles.viewAll}
          onPress={()=>navigation.navigate(ScreenNames.SUBJECT_DETAILS)}
          >
            <CustomText size={3.7}>See all</CustomText>
            <Arrow />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummySubjectData}
          horizontal
          contentContainerStyle={CommonStyles.paddingHorizontal_1}
          renderItem={({ item, index }) => {
            return (
              <SubjectCard
                onPress={() =>{
                  navigation.navigate(ScreenNames.SUBJECT_DETAILS, {
                    data: dummySubjectData[index],
                  })
                }
                }
                Icon={item?.Icon}
                title={item?.name}
                color={item?.color}
                chapters={item?.chapters}
              />
            );
          }}
        />

        <View
          style={[
            CommonStyles.rowJustifySpaceBtw,
            CommonStyles.marginHorizontal_2,
          ]}
        >
          <CustomText
            lineHeight={height(5)}
            size={4.5}
            textStyles={CommonStyles.marginTop_1}
            font={FontFamily.appFontMedium}
          >
            Recent Learned
          </CustomText>
          <TouchableOpacity style={styles.viewAll}>
            <CustomText size={3.7}>See all</CustomText>
            <Arrow />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummyRecentLearned}
          renderItem={({ item, index }) => {
            return (
              <RecentLearnedCard
                Icon={item?.icon}
                title={item?.name}
                color={item?.color}
                time={item?.time}
                back={item?.back}
                percentage={item?.percentage}
              />
            );
          }}
        />
        <View
          style={[
            CommonStyles.rowJustifySpaceBtw,
            CommonStyles.marginHorizontal_2,
          ]}
        >
          <CustomText
            lineHeight={height(5)}
            size={4.5}
            font={FontFamily.appFontMedium}
          >
            Instructor
          </CustomText>
          <TouchableOpacity style={styles.viewAll}>
            <CustomText size={3.7}>See all</CustomText>
            <Arrow />
          </TouchableOpacity>
        </View>
        <FlatList
          data={dummyInstructorData}
          horizontal
          contentContainerStyle={CommonStyles.paddingHorizontal_1}
          renderItem={({ item, index }) => {
            return <Instructor source={item?.source} name={item?.name} />;
          }}
        />
        <View style={CommonStyles.marginHorizontal_2}>
          <CustomText
            lineHeight={height(5)}
            size={4.5}
            font={FontFamily.appFontMedium}
            textStyles={CommonStyles.marginTop_2}
          >
            Live Classes
          </CustomText>
        </View>
        <FlatList
          data={dummyLiveClassesData}
          renderItem={({ item, index }) => {
            return (
              <LiveClasses
                source={item?.source}
                title={item?.title}
                time={item?.time}
                name={item?.name}
                rating={item?.rating}
              />
            );
          }}
        />
      </ScreenWrapper>
    </View>
  );
};

export default Home;
