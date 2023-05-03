import UserStats, { UserStatsProps } from 'components/UserStats/UserStats';
import React, { FC } from 'react';
import styles from './UserCard.module.scss';
import { LocalGithubUser } from 'types/user';
import UserTitle from 'components/UserTitle/UserTitle';
import UserInfo from 'components/UserInfo/UserInfo';

interface UserCardProps extends LocalGithubUser {}

const UserCard: FC<UserCardProps> = (props) =>{
  console.log(props.login);
  
  return (
  <div className={styles.userCard}>
    <img src={props.avatar} alt={props.login} className={styles.avatar} />
    <UserTitle login={props.login} created={props.created} name={props.name} />
    <p className={`${styles.bio}${props.bio ? '' : `${styles.empty}`}`}>
      {props.bio || 'This profiler has no bio'}
    </p>
    <UserInfo blog={props.blog} location={props.location} company={props.company} twitter={props.twitter}  />
    <UserStats repos={props.repos} followers={props.followers} following={props.following} />
  </div>
);}

export default UserCard;
