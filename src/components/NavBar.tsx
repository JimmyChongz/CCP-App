import { Button, Text } from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useRecoilState } from "recoil";
import { userState } from "../MainStore/Store";

export const NavBar = () => {
  const [user, setUser] = useRecoilState(userState);
  const navigate = useNavigate();
  const [t, i18n] = useTranslation();
  return (
    <div className="p-6 shadow-lg bg-yellow-100">
      <div className="flex justify-between">
        <Text fontSize="2xl" fontWeight="bold" color="black.200">
          長春苗栗廠資訊室庫存管理系統
        </Text>
        <div className="flex gap-2">
          <Text fontSize="2xl" fontWeight="bold" color="black.200">
            {user}
          </Text>
          <Button
            colorScheme="gray"
            onClick={() => {
              setUser("");
              navigate("/");
            }}
          >
            {t("Logout")}
          </Button>
          <Button
            colorScheme="facebook"
            onClick={() => {
              i18n.changeLanguage("tw");
            }}
          >
            {t("Chinese")}
          </Button>
          <Button
            colorScheme="facebook"
            onClick={() => {
              i18n.changeLanguage("us");
            }}
          >
            {t("English")}
          </Button>
        </div>
      </div>
    </div>
  );
};
