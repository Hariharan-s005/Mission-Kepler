import { useEffect, useState } from "react";
import { MemberCard } from "../../components/MemberCard/MemberCard";
import { getMembers } from "../../services/api.service";
import style from "./MembersContainer.module.css";
import { membersContainerConstants } from "../../constants/membersContainerConstants";

export const MembersContainer = () => {
  const [members, setMembers] = useState();

  useEffect(() => {
    getMembers().then((members) => {
      setMembers(members);
    });
  }, []);

  const memberCards = members?.map((member) => (
    <MemberCard key={member.id} {...member} />
  ));

  return (
    <div className={style["members-container"]}>
    <h2 className={style["members-title{"]}>{membersContainerConstants.TITLE}</h2>
    <div className={style["members-cards-container"]}>
      {memberCards}
    </div>
    </div>
  );
};

export default MembersContainer;
