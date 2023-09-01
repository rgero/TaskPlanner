import IProfile from "../../interfaces/IProfile";

export const GetUserData = ():IProfile => {
    const userData:string = localStorage.getItem("userData") as string;

    const jsonData = JSON.parse(userData);
    const parsedData:IProfile = 
    {
        displayName: jsonData.displayName,
        token: jsonData.token
    }
    return parsedData;
}

export const GetDisplayName = ():string => {
    const data:IProfile = GetUserData();
    return data.displayName as string;
}