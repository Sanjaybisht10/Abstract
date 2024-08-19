import { toast } from "react-hot-toast"
import { apiConnector } from "../apiConnector"
import {cardApi} from '../api'

const {GETALLCARDS_API,ADDCARD_API,GETCARDDETAILS_API,DELETECARD_API} = cardApi;


export const getAllCards = async () => {
    const toastId = toast.loading("Loading...")
    let result = []
    try {
      const response = await apiConnector("GET", GETALLCARDS_API)
      if (!response?.data?.success) {
        throw new Error("Could Not Fetch Course Categories")
      }
      result = response?.data?.data
    } catch (error) {
      toast.error(error.message)
    }
    toast.dismiss(toastId)
    return result
}

export const addCardDetails = async(data)=>{
    const toastId = toast.loading("Loading...")
    let result = null;
    try {
        const response = await apiConnector("POST", ADDCARD_API,data,{"Content-Type": "multipart/form-data"})
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
          }
          toast.success("Card Details Added Successfully")
          result = response?.data?.data

    } catch (error) {
        toast.error(error?.response?.data?.message || error?.message );
    }
    toast.dismiss(toastId);
    return result;
}

export const fetchCardDetails = async(searchQuery)=>{
    const toastId = toast.loading("Loading...")
    let result = null;
    try {
        const response = await apiConnector("GET", `${GETCARDDETAILS_API}?searchQuery=${searchQuery}`)
        if (!response?.data?.success) {
            throw new Error("Could Not Add Course Details")
          }
          result = response?.data?.data

    } catch (error) {
        toast.error(error.message)
    }
    toast.dismiss(toastId);
    return result;
}