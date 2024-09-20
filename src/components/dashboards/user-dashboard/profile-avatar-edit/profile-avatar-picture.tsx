// import React, { useState, useEffect } from "react";
// import { useTranslation } from "react-i18next";

// import { useMakeBlob } from "../../../../shared/hooks";
// import { UploadInput } from "../../../../shared/ui/inputs/upload-input";

// import { Flex, Avatar } from "@chakra-ui/react";

// interface ProfileAvatarPictureProps {}

// const ProfileAvatarPicture: React.FC<ProfileAvatarPictureProps> = () => {
//   const { t } = useTranslation("forms");

//   // const { user_data } = useAppSelector((state) => state.auth);
//   // const [userEditProfile, { isLoading }] = useUserEditProfileMutation();
//   // const toast = useChakraToast();

//   const [profileImage, setProfileImage] = useState("");
//   const uid = JSON.parse(window.localStorage.getItem("UID"));

//   useEffect(() => {
//     if (user_data?.profile_image) {
//       const image = `https://https://phplaravel-1309375-4888543.cloudwaysapps.com/storage/avatars/${user_data.avatar}`;
//       setProfileImage(image);
//     }
//   }, [user_data]);

// //   const updateProfileImage = async (e: React.ChangeEvent<HTMLInputElement>) => {
// //   const image = e.target.files;
// //   const imageBlobUrl = window.URL.createObjectURL(image);
// //   const file = await useMakeBlob(imageBlobUrl);
// //   const fd = new FormData();
// //   fd.append("profile_image", file);

// //   };

//   return (
//     <Flex flexDir={"column"} justify={"space-between"} gap={"1rem"} w={"100%"} maxW={"320px"}>
//       <Avatar src={profileImage} name={"name"} w={"140px"} h={"140px"} border={"none"} borderRadius={"100%"} />
//       <UploadInput
//         name={t("PROFILE_SETTINGS.BUTTONS.UPDATE_AVATAR")}
//         id="update-avatar"
//         accept="image/png, image/jpeg, .png, .jpg, .jpeg"
//         // isLoading={isLoading}
//         // cb={updateProfileImage}
//         w={"180px"}
//       />
//     </Flex>
//   );
// };

// export default ProfileAvatarPicture;
