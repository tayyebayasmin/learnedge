import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { ScreenWrapper } from 'react-native-screen-wrapper';
import { height } from '../../../utills/Dimension';
import { Arrow, Menu, Notificatoin, Notify, Search } from '../../../assets/SVG';
import {
  CustomText,
  Instructor,
  RecentLearnedCard,
  SubjectCard,
} from '../../../components';
import AppColors from '../../../utills/AppColors';
import { CommonStyles } from '../../../utills/CommonStyles';
import Input from '../../../components/input';
import {
  dummyInstructorData,
  dummyLiveClassesData,
  dummyRecentLearned,
  dummySubjectData,
} from '../../../utills/dummyData';
import LiveClasses from '../../../components/live-classes';
import { FontFamily } from '../../../utills/Fontfamily';
import styles from './styles';
import { ScreenNames } from '../../../routes';
import SideMenu from '../../../components/sidemenu';

const Home = ({ navigation }) => {
  const [search, setSearch] = useState('');
  const [menu, setMenu] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        <TouchableOpacity onPress={() => setMenu(!menu)}>
          <Menu />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate(ScreenNames.NOTIFICATIONS)}
          style={{
            marginTop: -8,
          }}
        >
          <Notificatoin />
        </TouchableOpacity>
      </View>
      <ScreenWrapper
        barStyle='dark-content'
        statusBarColor='white'
        scrollType='scroll'
        scrollViewProps={{
          showsVerticalScrollIndicator: false,
        }}
      >
        <View style={{ zIndex: 100 }}>
          {menu && (
            <SideMenu
              onPress={() => navigation.navigate(ScreenNames.USER_PROFILE)}
              onPressLiveClasses={() =>
                navigation.navigate(ScreenNames.LIVE_CLASSES)
              }
              onPressNotification={() =>
                navigation.navigate(ScreenNames.NOTIFICATIONS)
              }
              onPressStore={() => navigation.navigate(ScreenNames.STORE)}
            />
          )}
        </View>
        <View style={{ zIndex: 0 }}>
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
              placeholder='Search...'
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
          </View>
          <FlatList
            data={dummySubjectData}
            horizontal
            contentContainerStyle={CommonStyles.paddingHorizontal_1}
            renderItem={({ item, index }) => {
              return (
                <SubjectCard
                  onPress={() => {
                    navigation.navigate(ScreenNames.SUBJECT_DETAILS, {
                      data: dummySubjectData[index],
                    });
                  }}
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
              CommonStyles.marginTop_2_5,
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
              CommonStyles.marginTop_2_5,
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
          <View
            style={[
              CommonStyles.rowJustifySpaceBtw,
              CommonStyles.marginHorizontal_2,
              CommonStyles.marginTop_2_5,
            ]}
          >
            <CustomText
              lineHeight={height(5)}
              size={4.5}
              font={FontFamily.appFontMedium}
            >
              Live Classes
            </CustomText>
            <TouchableOpacity
              style={styles.viewAll}
              onPress={() => navigation.navigate(ScreenNames.LIVE_CLASSES)}
            >
              <CustomText size={3.7}>See all</CustomText>
              <Arrow />
            </TouchableOpacity>
          </View>
          <FlatList
            data={dummyLiveClassesData}
            renderItem={({ item, index }) => {
              return (
                <LiveClasses
                  onPress={() =>
                    navigation.navigate(ScreenNames.LIVE_CLASS_DETAILS, {
                      liveClassData: item,
                    })
                  }
                  source={item?.source}
                  title={item?.title}
                  time={item?.time}
                  name={item?.name}
                  color={item?.color}
                  subject={item?.subject}
                  rating={item?.rating}
                />
              );
            }}
          />
        </View>
      </ScreenWrapper>
    </View>
  );
};

export default Home;
