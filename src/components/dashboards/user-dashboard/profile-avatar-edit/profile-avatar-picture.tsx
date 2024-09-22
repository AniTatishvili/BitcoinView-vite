import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { useMakeBlob } from "../../../../shared/hooks";
import { UploadInput } from "../../../../shared/ui/inputs/upload-input";

import { Flex, Avatar } from "@chakra-ui/react";
import { useUserSignupStore } from "../../../../store/dashboard/user-auth";

interface ProfileAvatarPictureProps {}

export const ProfileAvatarPicture: React.FC<ProfileAvatarPictureProps> = () => {
  const { t } = useTranslation("forms");

  const userData = useUserSignupStore();
  // const [userEditProfile, { isLoading }] = useUserEditProfileMutation();
  // const toast = useChakraToast();

  const [profileImage, setProfileImage] = useState("");
  const uid = JSON.parse(window.localStorage.getItem("UID") || "");

  //   useEffect(() => {
  //     if (user_data?.avatar) {
  //       const image = `https://https://phplaravel-1309375-4888543.cloudwaysapps.com/storage/avatars/${user_data.avatar}`;
  //       setProfileImage(image);
  //     }
  //   }, [user_data]);

  const updateProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files;
    if (image && image.length > 0) {
      const imageBlobUrl = window.URL.createObjectURL(image[0]);
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const file = await useMakeBlob(imageBlobUrl);
      if (file) {
        const fd = new FormData();
        fd.append("profile_image", file);
        console.log(file);
        setProfileImage(URL.createObjectURL(file));
        // dispatch(saveUserDataInGlobalState({ profile_image: res.data.user.profile_image }));
      } else {
        console.log("No files selected");
      }
    } else {
      console.log("No files selected");
    }
  };

  return (
    <Flex flexDir={"column"} justify={"space-between"} gap={"1rem"} w={"100%"} maxW={"320px"}>
      <Avatar src={profileImage} name={"name"} w={"140px"} h={"140px"} border={"none"} borderRadius={"100%"} />
      <UploadInput
        name={t("PROFILE_SETTINGS.BUTTONS.UPDATE_AVATAR")}
        // id="update-avatar"
        accept="image/png, image/jpeg, .png, .jpg, .jpeg"
        // isLoading={isLoading}
        cb={updateProfileImage}
        w={"180px"}
      />
    </Flex>
  );
};
