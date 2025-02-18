import { useEffect, useState } from "react";
import useUser from "../../contexts/UserContext";
import Button from "../Button";
import Input from "../Input";
import { editUser, updateUserPassword } from "../../firebase";
import { validatePassword } from "../../helperFunctions";
import { useTranslation } from "react-i18next";

export default function Profile() {
    const [editState, setEditState] = useState(false);
    const {t} = useTranslation();

    const { user, userData, dispatch } = useUser();
    // const {userData, setUserData} = useOutletContext();
    const [passwords, setPasswords] = useState({
        oldPassword: "",
        newPassword: "",
        confirmPassword: ""
    });
    const [message, setMessage] = useState({
        type: "",
        text: ""
    });

    // Function to show message
    // =====================================
    function showMessage(type, text) {
        setMessage({ type, text });
    }
    // =====================================

    // Function to handle edit button click
    // =====================================
    const handleEdit = () => {
        setEditState(true);
    };
    // =====================================

    // Functions to edit user data
    // =====================================

    // Function to handle password change
    async function handlePasswordChange() {
        if (passwords.newPassword !== passwords.confirmPassword) {
            showMessage("error", t("newAndConfirmPass"));
            return false;
        }
        if (passwords.oldPassword === passwords.newPassword) {
            showMessage("error", t("oldAndNewPass"));
            return false;
        }
        const passwordError = validatePassword(passwords.newPassword);
        if (passwordError) {
            showMessage("error", passwordError);
            return false;
        }
        const passwordUpdateResult = await updateUserPassword(passwords.newPassword, passwords.oldPassword);
        if (!passwordUpdateResult.success) {
            showMessage("error", passwordUpdateResult.message || t("faildUpdatePass"));
            return false;
        }
        setPasswords({ oldPassword: "", newPassword: "", confirmPassword: "" });
        return true;
    }

    // Function to handle save button click and update user data
    async function handleSave() {
        try {
            if (passwords.oldPassword !== "" || passwords.newPassword !== "" || passwords.confirmPassword !== "") {
                const passwordChanged = await handlePasswordChange();
                if (!passwordChanged) {
                    return;
                }
            }
            const userUpdateResult = await editUser(userData);
            if (!userUpdateResult.success) {
                showMessage("error", userUpdateResult.message || t("faildUpdateUser"));
                return;
            } else {
                showMessage("success", t("updateSuccess"));
            }
            setEditState(false);
        } catch (error) {
            showMessage("error", error.message || t("faildUpdateUser"));
            console.error(error);
        }
    }
    // =====================================

    // Function to handle input changes
    // =====================================
    // Function to handle fname, lname, address input changes
    function handleInputChange(e) {
        const { name, value } = e.target;
        dispatch({
            type: "SET_USER_DATA",
            payload: { ...userData, [name]: value }
        });
        // setUserData({...userData, [name]: value});
    }

    // Function to handle oldPassword, newPassword, confirmPassword inputs changes
    function handlePasswordInputChange(e) {
        const { name, value } = e.target;
        setPasswords({ ...passwords, [name]: value });
    }
    // =====================================

    return (
        <>
            <h2 className="text-xl font-medium text-s-red mb-4">{t("editProfile")}</h2>
            <div className="flex flex-col gap-6">
                <div className="flex gap-12.5 flex-col md:flex-row">
                    <Input container={true} label={t("firstName")} readOnly={!editState} type="text" id="fname" value={userData?.fname} placeholder={t("firstName")} onChange={handleInputChange} />
                    <Input container={true} label={t("lastName")} readOnly={!editState} type="text" id="lname" value={userData?.lname} placeholder={t("lastName")} onChange={handleInputChange} />
                </div>
                <div className="flex gap-12.5 flex-col md:flex-row">
                    <Input container={true} label={t("email")} readOnly={true} type="email" id="email" value={user?.email} placeholder="name@gmail.com" inputClasses="text-black/40 cursor-not-allowed" />
                    <Input container={true} label={t("address")} readOnly={!editState} type="text" id="address" value={userData?.address} placeholder={t("address")} onChange={handleInputChange} />
                </div>
                <div className="flex flex-col gap-4">
                    <Input container={true} label={t("passwordChanges")} readOnly={!editState} type="password" id="oldPassword" placeholder={t("currentPassword")} value={passwords.oldPassword} onChange={handlePasswordInputChange} />
                    <Input readOnly={!editState} type="password" id="newPassword" placeholder={t("newPassword")} value={passwords.newPassword} onChange={handlePasswordInputChange} />
                    <Input readOnly={!editState} type="password" id="confirmPassword" placeholder={t("confirmPassword")} value={passwords.confirmPassword} onChange={handlePasswordInputChange} />
                </div>
                {user?.emailVerified === false && <p className="text-s-red text-sm font-semibold">* {t("varificationMessage")}</p>}
                {message.text.length > 0 && <p className={`text-sm font-semibold ${message.type === "success" ? "text-green-700" : "text-s-red"}`}>* {message.text}</p>}
                <div className="flex gap-4 self-end">
                    {editState ? (
                        <>
                            <Button background="bg-transparent" text="text-black" onClick={() => setEditState(false)}>
                                {t("cancel")}
                            </Button>
                            <Button onClick={handleSave}>{t("saveChanges")}</Button>
                        </>
                    ) : (
                        <Button onClick={handleEdit}>{t("edit")}</Button>
                    )}
                </div>
            </div>
        </>
    );
}
