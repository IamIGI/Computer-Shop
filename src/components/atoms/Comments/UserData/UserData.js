import React from 'react';
import {
    Wrapper,
    UserDataDescription,
    UserDataApproved,
    Icon1,
    Icon2,
    UserName,
    ApprovedDescription,
} from './UserData.style';
import { BsPerson, BsCheckCircle } from 'react-icons/bs';

const UserData = ({ comment }) => {
    return (
        <Wrapper>
            <UserDataDescription>
                <Icon1>
                    <BsPerson />
                </Icon1>
                <UserName>{comment.userName}</UserName>
            </UserDataDescription>
            <UserDataApproved>
                {comment.confirmed && (
                    <>
                        <Icon2>
                            <BsCheckCircle />
                        </Icon2>
                        <ApprovedDescription>Potwierdzony zakup</ApprovedDescription>
                    </>
                )}
            </UserDataApproved>
        </Wrapper>
    );
};

export default UserData;
