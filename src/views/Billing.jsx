import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { planMockData, ComparePlans, planChangeText } from "../utils/constant";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { billingApi } from "../utils/billingApi";
import { setPlan, setSelected } from "../slice/billingSlice";
import apiRequestHanlder from "../utils/apiRequestHandler";

import getFetchConfig from '../utils/getFetchConfig';
import standardFetchHandlers from '../utils/standardFetchHandlers';
import handleFetchErrors from '../utils/handleFetchErrors';
import appURLs from '../appURL';
import TitleManager from "../components/TitleManager";
import toast from "react-hot-toast";
import { GetAxiosConfig } from "../utils/axiosConfig.js";
import AnimatedLoader from "../components/loader/AnimatedLoader.jsx";

const Billing = () => {
	const [currentPlan, updateCurrentPlan] = useState("Starter");
	const router = useNavigate();
	const [selected, setSelected] = useState(0);
	const [loader, toggleLoader] = useState(false);
	const dark = useSelector((state) => state.home.dark);

	const dispatch = useDispatch();
	useEffect(() => {
		const storedPlanName = localStorage.getItem("planName");
		const storedStoreName = localStorage.getItem("storeName");

		if (storedPlanName) {
			//   setCurrentPlan(storedPlanName);
			dispatch(setPlan(storedPlanName)); // Use the correct action: setPlan
		}

		if (storedStoreName) {
			// Use the appropriate action if needed
			// dispatch(setStoreName(storedStoreName)); // This action is not defined in your billingSlice.js
		}
	}, [dispatch]);


	const handleBilling = async (item) => {
		try {
			let response = await billingApi(item, selected);
			console.log(response.data);
			if (response?.data?.confirmationUrl) {
				console.log(response?.data?.confirmationUrl);
				window.location.replace(response?.data?.confirmationUrl);
			}
		} catch (e) {
			console.log(e);
		}
	};






	const fetchingBillingDetails = async () => {
		try {
			toggleLoader(true);
			const res = await GetAxiosConfig(`user/current-plan-detail`);
			toggleLoader(false);

			const resJOSN = res?.data;
			if (resJOSN?.status === 200) {
			} else {
				return toast.error("Please try again");
			}
		}
		catch (error) {
			toggleLoader(false);
			console.error("Error fetching user profile data:", error);
		}

	}
	useEffect(() => {
		fetchingBillingDetails()
	}, [])

	return (
		loader ? <AnimatedLoader /> :
		<div className="w-[100%] h-[100vh] overflow-hidden flex flex-col">
			<TitleManager title="Billing" conicalURL="billing" />

			<div className="w-[100%] h-[50px] shrink-0"></div>
			<div
				style={{ backgroundColor: dark ? "#09090b" : "#FAFAFC" }}
				className="w-[100%] h-[100%] flex flex-col items-center  overflow-y-auto scroll-bar-cool111 bg-[#FAFAFC] mobile:px-[10px] laptop:px-[80px]"
			>
				<div className="w-[100%] max-w-[1920px] min-h-[100vh]">
					<h1
						style={{
							color: dark ? "#fff" : "#000",
						}}
						className="text-[20px] font-bold tracking-wide text-center pt-[30px]"
					>
						Plans and Billing
					</h1>
					<h1 className="text-[14px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
						Speed up your website effortlessly, we offer a 7-day trial
					</h1>
					<div className="w-[100%] mt-[15px] flex items-center justify-center">
						<div
							style={{
								backgroundColor: dark ? "#111317" : "#fff",
								borderColor: dark ? "#1F2329" : "#ebebeb",
							}}
							className="flex w-[200px] h-[40px]  border-[1px]   rounded-[4px] px-[3px] py-[3px]"
						>
							<div
								onClick={() => {
									setSelected(0);
								}}
								style={{
									backgroundColor: selected === 0 ? "#18df903f" : "",
									color: selected === 0 ? "#0FE38F" : "#85858C",
								}}
								className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
							>
								Monthly
							</div>
							<div
								onClick={() => {
									setSelected(1);
								}}
								style={{
									backgroundColor: selected === 1 ? "#18df903f" : "",
									color: selected === 1 ? "#0FE38F" : "#85858C",
								}}
								className="w-[50%] cursor-pointer h-[100%] rounded-[4px] text-[14px] font-medium flex items-center justify-center tracking-wide"
							>
								Annually
							</div>
						</div>
					</div>

					<div className="w-[100%] mt-[20px] grid laptop:grid-cols-4 mobile:gap-y-[10px] laptop:gap-[20px]">
						{planMockData?.map((item, index) => {
							return (
								<div
									key={index}
									style={{
										backgroundColor: dark ? "#111317" : "#fff",
										borderColor: dark ? "#1F2329" : "#ebebeb",
									}}
									className=" bg-[#fff] border-[1px] border-[#EBEBEB] py-[12px] mobile:mb-[3px] laptop:mb-[30px] rounded-[8px]"
								>
									<h1
										style={{
											color: dark ? "#fff" : "#000",
										}}
										className="text-[20px]  px-[17px] font-bold tracking-wide"
									>
										{item?.name}
									</h1>
									<p
										style={{
											color: dark ? "#ffffff74" : "#0a0a187e",
										}}
										className="text-[14px] h-[42px] px-[17px] text-[#0a0a187a] font-medium tracking-wide"
									>
										{item?.desc}
									</p>
									<div
										style={{
											color: dark ? "#fff" : "#000",
										}}
										className="w-[100%] leading-[32px] px-[17px] relative mt-[10px] shrink-0 text-[32px] font-bold "
									>
										{selected === 0
											? `$ ${item?.monthlyPrice}`
											: `$ ${item?.annuallyPrice}`}
										<span className="text-[14px] font-medium text-[#696e7e89]">
											{" "}
											/month
										</span>
									</div>
									<p
										style={{
											color: dark ? "#ffffff74" : "#0a0a187e",
										}}
										className="text-[14px]  px-[17px] mt-[14px] text-[#0a0a187a]  tracking-wide"
									>
										<span className="font-bold">{item?.pageViews}</span> page
										views/mo
									</p>
									<p
										style={{
											color: dark ? "#ffffff74" : "#0a0a187e",
										}}
										className="text-[14px]  px-[17px] text-[#0a0a187a]  tracking-wide"
									>
										{/* <span className="font-bold">{item?.CDN_bandWidth}</span> CDN
										bandwidth/mo */}
									</p>
									<div className="w-[100%] px-[17px] mt-[15px]">
										{currentPlan == item?.name ? (
											<div
												style={{
													backgroundColor: "#18df903f",
													color: "#0FE38F",
												}}
												className="w-[100%] h-[38px] rounded-[3px] border-[1px] bg-[#38f8ab27] hover:text-[#fff]  border-[#38f8ab27] text-[14px] font-bold text-[#fff] tracking-wide flex items-center justify-center"
											>
												{item?.name === currentPlan && "Current Plan"}
											</div>
										) : (
											<div
												onClick={() => {
													handleBilling(item);
												}}
												style={{
													borderColor: dark ? "#1F2329" : "#ebebeb",
												}}
												className={`w-[100%] h-[38px] text-[${dark ? "#fff" : "#000"
													}] hover:bg-[#38F8AC] hover:text-[#000] cursor-pointer rounded-[3px] border-[1px] border-[#ebebeb] text-[14px] font-bold text-[#000] tracking-wide flex items-center justify-center`}
											>
												{planChangeText(item, currentPlan)}
											</div>
										)}
									</div>
									<div className="w-[100%]  px-[17px] mt-[15px] pt-[15px] border-t-[1px] border-[#ebebeb]">
										<p
											style={{
												color: dark ? "#fff" : "#000",
											}}
											className="text-[14px] font-bold tracking-wide"
										>
											{item?.name} Plan Includes
										</p>
										{item?.includes?.map((includesItems, includesIndex) => {
											return (
												<div
													className="w-[100%] mt-[10px] flex justify-between"
													key={includesIndex}
												>
													<img
														src="/graphic/status/check.svg"
														className="w-[13px] mr-[10px] shrink-0"
														alt=""
													/>
													<p
														style={{
															color: dark ? "#ffffff74" : "#0a0a187e",
														}}
														className="text-[14px] w-[100%] text-[#696e7e89] tracking-wide font-medium "
													>
														{includesItems}
													</p>
												</div>
											);
										})}
									</div>
								</div>
							);
						})}
					</div>

					<h1 className="text-[20px] font-bold tracking-wide mt-[20px] text-center pt-[0px]">
						Compare Plans
					</h1>
					<h1 className="text-[14px] font-medium text-[#696e7ea8] tracking-wide text-center mt-[2px]">
						Choose a plan that’s right for you and leverage everything
						TurboBoost has to offer.
					</h1>
					<div
						style={{
							backgroundColor: dark ? "#111317" : "#fff",
							borderColor: dark ? "#1F2329" : "#ebebeb",
						}}
						className=" w-[100%] mt-[15px] bg-[#fff] border-[1px] border-[#EBEBEB] pt-[12px] mb-[30px] rounded-[8px]"
					>
						<Table1 />
					</div>
				</div>
			</div>
		</div>
	);
};

const Table1 = ({ setSelected1 }) => {
	return (
		<div className="w-[100%] border-[#ebebeb] mt-[0px] mobile:pb-[10px] laptop:pb-[0] overflow-x-auto overflow-y-hidden scroll-x-cool">
			<div className="mobile:w-[500px] laptop:w-[100%]">
				<TableHeader1 />
				<TableItem1
					title="Page Views Per Month"
					free="5,000"
					starter="50,000"
					growth="200,000"
					pro="1,000,000"
				/>
				{/* <TableItem1
					title="CND Bandiwth Per Month"
					free="1GB"
					starter="25GB"
					growth="100GB"
					pro="500GB"
				/> */}
				{ComparePlans.map((item, i) => {
					return (
						<TableItem2
							key={i}
							title={item.title}
							free={item.free}
							starter={item.starter}
							growth={item.growth}
							pro={item.pro}
						/>
					);
				})}
			</div>
		</div>
	);
};

const TableHeader1 = ({ change }) => {
	const [check, setCheck] = useState(false);
	const dark = useSelector((state) => state.home.dark);
	return (
		<div
			style={{ borderColor: dark ? "#1F2329" : "#ebebeb" }}
			className="w-[100%] px-[10px] flex h-[30px] border-b-[1px] border-[#ebebeb]"
		>
			<div className="w-[30%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"></div>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[18%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
			>
				Basic
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[18%] text-[16px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
			>
				Starter
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[18%] text-[16px] px-[15px] cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
			>
				Growth
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[16%] text-[16px] px-[15px]  cursor-pointer leading-[14px] tracking-wide text-[#000] font-bold flex h-[100%] items-center"
			>
				Pro
			</div>
		</div>
	);
};

const TableItem1 = ({ last, free, starter, growth, pro, title }) => {
	const [check, setCheck] = useState(false);
	const dark = useSelector((state) => state.home.dark);
	return (
		<div
			style={{
				borderColor: dark ? "#1F2329" : "#ebebeb",
			}}
			className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] border-[#ebebeb]"
		>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[30%] text-[16px] px-[15px] text-[#000]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
			>
				{title}
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#0a0a1876",
				}}
				className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
			>
				{free}
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#0a0a1876",
				}}
				className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
			>
				{starter}
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#0a0a1876",
				}}
				className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
			>
				{growth}
			</div>
			<div
				style={{
					color: dark ? "#fff" : "#0a0a1876",
				}}
				className="w-[16%] text-[14px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide ] font-bold flex h-[100%] items-center"
			>
				{pro}
			</div>
		</div>
	);
};
const TableItem2 = ({ last, free, starter, growth, pro, title }) => {
	const [check, setCheck] = useState(false);
	const dark = useSelector((state) => state.home.dark);
	const clr = dark ? "#1F2329" : "#ebebeb";
	return (
		<div
			style={{
				borderColor: dark ? "#1F2329" : "#ebebeb",
			}}
			className="w-[100%] flex px-[10px] h-[45px] border-b-[1px] "
		>
			<div
				style={{
					color: dark ? "#fff" : "#000",
				}}
				className="w-[30%] text-[16px] px-[15px] text-[#000]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center"
			>
				{title}
			</div>
			<div className="w-[18%] text-[14px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
				{free ? (
					<img
						src="/graphic/bill/check.svg"
						className="w-[15px] ml-[1px]"
						alt=""
					/>
				) : (
					<img
						src="/graphic/bill/cross.svg"
						className="w-[12px] ml-[1px]"
						alt=""
					/>
				)}
			</div>
			<div className="w-[18%] text-[11px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
				{starter ? (
					<img
						src="/graphic/bill/check.svg"
						className="w-[15px] ml-[1px]"
						alt=""
					/>
				) : (
					<img
						src="/graphic/bill/cross.svg"
						className="w-[12px] ml-[1px]"
						alt=""
					/>
				)}
			</div>
			<div className="w-[18%] text-[11px] px-[15px] text-[#0a0a1876]  cursor-pointer leading-[14px] tracking-wide  font-bold flex h-[100%] items-center">
				{growth ? (
					<img
						src="/graphic/bill/check.svg"
						className="w-[15px] ml-[1px]"
						alt=""
					/>
				) : (
					<img
						src="/graphic/bill/cross.svg"
						className="w-[12px] ml-[1px]"
						alt=""
					/>
				)}
			</div>
			<div className="w-[16%] text-[11px] px-[15px] text-[#0a0a1876]   cursor-pointer leading-[14px] tracking-wide ] font-bold flex h-[100%] items-center">
				{pro ? (
					<img
						src="/graphic/bill/check.svg"
						className="w-[15px] ml-[1px]"
						alt=""
					/>
				) : (
					<img
						src="/graphic/bill/cross.svg"
						className="w-[12px] ml-[1px]"
						alt=""
					/>
				)}
			</div>
		</div>
	);
};

export default Billing;
