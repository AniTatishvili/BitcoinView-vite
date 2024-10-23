import React from "react";
import axios from "axios";

import { useNavigate } from "react-router-dom";

import { Flex, Box, Button, Tooltip, Text, List, ListItem } from "@chakra-ui/react";
import { useUserSelectedPackageStore } from "../../../store/dashboard/user-selected-package-store";
import useCustomToast from "../../../shared/hooks/useCustomToast";

import { RiQuestionFill } from "react-icons/ri";
import { OrbitPackageModal } from "../modal/orbit-package-modal";
import { useUserSignupStore } from "../../../store/dashboard/user-auth";
import { useUserPackageCancelStore } from "../../../store/dashboard/user-package-cancel-store";
import { useUserPackageNameStore } from "../../../store/dashboard/user-package-name-store";
import useUserBalance from "../../hooks/useUserBalance";
import { TermsAndConditionsModal } from "../modal";

interface UserData {
  amount: number;
  package_name: string;
  is_purchase: boolean;
  purchase_id: number;
  id: number;
}

export const SliderMarkPackage = () => {
  const navigate = useNavigate();
  const showToast = useCustomToast();

  const { setUserPackageData } = useUserSelectedPackageStore();
  const { active_package } = useUserSignupStore();
  const { userBalance, estimatedBalance } = useUserBalance();
  const { setUserPackageNameData } = useUserPackageNameStore();
  
  const package_id = active_package - 2;

  const [data, setData] = React.useState<UserData[]>([]);
  const { setUserPackageCancelData, userPackageCancelData } = useUserPackageCancelStore();
  const [activeIndex, setActiveIndex] = React.useState<number | null>(package_id ?? userBalance ?? 0);
  const [isOrbitSelected, setIsOrbitSelected] = React.useState(false);
  const [isCheckboxChecked, setIsCheckboxChecked] = React.useState(false);

  const token = typeof window !== "undefined" ? JSON.parse(window.localStorage.getItem("USER_AUTH") || "{}") : {};

  const url = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/packages";
  const purckageUlr = "https://phplaravel-1309375-4888543.cloudwaysapps.com/api/purchase";

  const tooltipContent = [
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Trial
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box h={"22px"}>$50</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Profit:</Text>{" "}
              <Box h={"22px"} textAlign={"start"}>
                Guaranteed 1.3% in 2 weeks
              </Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Purpose:</Text>{" "}
              <Flex h={"22px"} textAlign={"start"} alignItems={"start"} justifyContent={"start"}>
                Test platform capabilities
              </Flex>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Restrictions:</Text>{" "}
              <Box h={"22px"} textAlign={"start"} alignItems={"start"} justifyContent={"start"}>
                Only available once per client and per IP address
              </Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Voyager
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$5,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>1.6%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> <Box>3 months</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Flex textAlign={"start"} alignItems={"start"} justifyContent={"start"}>
                20% to withdraw initial investment before contract matures
              </Flex>
            </ListItem>
            <ListItem display={"flex"} alignItems={"start"} justifyContent={"start"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text>
              <Flex textAlign={"start"} alignItems={"start"} justifyContent={"start"}>
                Monthly profits can be withdrawn without penalties.
              </Flex>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Elite
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$8,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>1.9%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 3 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>23% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Pioneer
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$16,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>2.2%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 6 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>23% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Quantum
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$32,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>2.5%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 6 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>26% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Titan
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$64,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>2.8%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 9 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>26% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Nexus
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$128,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>3.0%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 12 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>29% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Platinum
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$163,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>3.3%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 18 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>29% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
    {
      label: (
        <Box>
          <Text as={"h4"} fontSize={"14px"} fontWeight={"600"}>
            Orbit
          </Text>
          <List fontSize={"10px"}>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Minimum Deposit:
              </Text>
              <Box>$216,000</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Monthly Profit:
              </Text>
              <Box>3.5%</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Eligible for First Profit Withdrawal:
              </Text>
              <Box>45 days, after, every month</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Duration:</Text> 24 months
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"} whiteSpace={"nowrap"}>
                • Cancellation Fee:
              </Text>
              <Box>30% to withdraw initial investment before contract matures</Box>
            </ListItem>
            <ListItem display={"flex"} gap={2}>
              <Text fontWeight={"600"}>• Withdrawals:</Text> <Box>Monthly profits can be withdrawn without penalties</Box>
            </ListItem>
          </List>
        </Box>
      ),
    },
  ];

  React.useEffect(() => {
    axios
      .get(url, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setData(response.data.packages);
      })
      .catch((error) => {
        showToast("error", error.response.data.message);
        setActiveIndex(2);
        console.error("Error fetching user data:", error);
      });
  }, [setUserPackageCancelData, userPackageCancelData]);

  const handleClick = (index: number) => {
    // console.log(index, "index");
    setActiveIndex(index);
    if (data[index].package_name === "Orbit") {
      setIsOrbitSelected(true);
    }
  };

  const handleMouseClick = async () => {
    // navigate("/user-dashboard/package-selection-success");PRICE_POINTS[activeIndex]?.value;
    if (activeIndex !== null) {
      const activePackage = data[activeIndex];

      setUserPackageNameData({ package_name: activePackage.package_name });

      if (activePackage.package_name !== "Orbit") {
        const package_id = data[activeIndex].id;

        try {
          const response = await axios.post(
            purckageUlr,
            { package_id: package_id },
            {
              headers: {
                Authorization: `Bearer ${token}`,
              },
            }
          );
          if (response.data.purchase.status == "Inactive") {
            setUserPackageData({
              amount: activePackage.amount - Number(userBalance) - Number(estimatedBalance),
              package_name: activePackage.package_name,
              is_purchase: true,
              purchase_id: response.data.purchase.id,
            });

            setActiveIndex(response.data.purchase.id - 2);
            navigate("/user-dashboard/deposit");
          } else {
            setActiveIndex(activeIndex);
            navigate("/user-dashboard/package-selection-success");
          }

          // console.log("Package updated successfully:", response.data);
        } catch (error) {
          console.error("Error updating avatar:", error);
        }
      }
    }
  };

  return (
    <>
      <Flex w={"100%"} flexDir={"column"} align={"flex-end"}>
        <Flex w={"100%"} overflowX={"auto"}>
          <Flex w={`{base:"750px", 2xl:"800px"}`} h={"120px"} justify={"space-between"} align={"center"} pos={"relative"} zIndex={2}>
            <Flex
              w={"100%"}
              h={"7px"}
              bg={"#939090"}
              borderRadius={"3.5px"}
              pos={"absolute"}
              top={"50%"}
              left={"0"}
              transform={"translateY(-50%)"}
              zIndex={-1}></Flex>
            {Array.isArray(data) &&
              data.map((point, i) => (
                <Flex key={i} w={"80px"} flexDir={"column"} align={"center"} gap={4} fontSize={"14px"}>
                  <Flex>
                    <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.package_name}</Text>
                    <Tooltip
                      hasArrow
                      label={tooltipContent[i]?.label}
                      aria-label="A tooltip"
                      placement="start-end"
                      bg={"#1C1C1C"}
                      color={"#fff"}
                      borderRadius={"8px"}>
                      <Box ms={"2px"}>
                        <RiQuestionFill />
                      </Box>
                    </Tooltip>
                  </Flex>
                  <Flex
                    w={activeIndex === i ? "40px" : "17px"}
                    h={activeIndex === i ? "40px" : "17px"}
                    bg={"#D9D9D9"}
                    borderRadius={"50%"}
                    cursor={"pointer"}
                    onClick={() => handleClick(i)}></Flex>
                  {point.package_name === "Orbit" ? (
                    <Text opacity={0}>Contact</Text>
                  ) : (
                    <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{i === 0 ? userBalance : point.amount}</Text>
                  )}

                  {/* {point.amount === "custom" && showInput ? (
                <Input
                  type="number"
                  w={"70px"}
                  h={"24px"}
                  color={"#f7931a"}
                  fontSize={"14px"}
                  textAlign={"center"}
                  border={0}
                  p={0}
                  min={200000}
                  placeholder="----"
                  _focus={{ boxShadow: "none" }}
                  onChange={(e) => {
                    setInput(Number(e.target.value));
                    setActiveIndex(i);
                  }}
                />
              ) : (
                <Text color={activeIndex === i ? "#f7931a" : "#fff"}>{point.amount}</Text>
              )} */}
                </Flex>
              ))}
          </Flex>
        </Flex>
        <Flex flexDir={{ base: "column", sm: "row" }} gap={4} mt={4}>
          <TermsAndConditionsModal isChecked={isCheckboxChecked} onCheckboxChange={setIsCheckboxChecked} />
          <Button bg={"#3AAB41"} onClick={handleMouseClick} disabled={!isCheckboxChecked}>
            Purchase
          </Button>
        </Flex>
      </Flex>

      {isOrbitSelected && <OrbitPackageModal isOpen={!!isOrbitSelected} onClose={() => setIsOrbitSelected(false)} />}
    </>
  );
};
