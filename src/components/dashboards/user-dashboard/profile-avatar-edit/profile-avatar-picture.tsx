import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

import { UploadInput } from "../../../../shared/ui/inputs/upload-input";

import { Flex, Avatar } from "@chakra-ui/react";
import { useUserSignupStore } from "../../../../store/dashboard/user-auth";
import axios from "axios";

interface ProfileAvatarPictureProps {}

export const ProfileAvatarPicture: React.FC<ProfileAvatarPictureProps> = () => {
  const { t } = useTranslation("forms");
  const { updateUserFields, avatar, username } = useUserSignupStore();

  const [profileImage, setProfileImage] = useState("");
  const [userName, setUserName] = useState("");
  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/user-avatar";

  // const updateProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
  //   const image = e.target.files;

  //   if (image && image.length > 0) {
  //     const imageBlobUrl = window.URL.createObjectURL(image[0]);
  //     // eslint-disable-next-line react-hooks/rules-of-hooks
  //     const file = await useMakeBlob(imageBlobUrl);
  //     console.log(imageBlobUrl, "imageBlobUrl", URL.createObjectURL(image[0]));
  //     if (file) {
  //       const fd = new FormData();
  //       fd.append("avatar", file);
  //       setProfileImage(URL.createObjectURL(file));
  //       console.log(file, profileImage);
  //       try {
  //         const response = await axios.post(url, fd, {
  //           headers: {
  //             Authorization: `Bearer ${token}`,
  //             "Content-Type": "application/json",
  //           },
  //         });
  //         console.log("Avatar updated successfully:", response.data);
  //       } catch (error) {
  //         console.error("Error updating avatar:", error);
  //       }
  //     }
  //   } else {
  //     console.log("No files selected");
  //   }
  // };
  const updateProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const image = e.target.files;

    if (image && image.length > 0) {
      const file = image[0];
      const fd = new FormData();
      fd.append("avatar", file);
      const objectUrl = URL.createObjectURL(file);
      setProfileImage(objectUrl);

      try {
        const response = await axios.post(url, fd, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        updateUserFields({ avatar: response.data.avatar });
        console.log("Avatar updated successfully:", response.data);
      } catch (error) {
        console.error("Error updating avatar:", error);
      }
    } else {
      console.log("No files selected");
    }
  };

  useEffect(() => {
    if (avatar) {
      setProfileImage("https://phplaravel-1309375-4888543.cloudwaysapps.com" + avatar);
      setUserName(username);
    }
  }, [avatar, username]);

  return (
    <Flex flexDir={"column"} justify={"space-between"} gap={"1rem"} w={"100%"} maxW={"320px"}>
      <Avatar src={profileImage} name={userName} w={"140px"} h={"140px"} border={"none"} borderRadius={"100%"} />
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
