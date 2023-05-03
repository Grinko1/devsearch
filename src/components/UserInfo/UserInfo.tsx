import { FC } from 'react';
import { ReactComponent as IconWeb } from 'assets/icon-website.svg';
import { ReactComponent as IconCompany } from 'assets/icon-company.svg';
import { ReactComponent as IconLocation } from 'assets/icon-location.svg';
import { ReactComponent as IconTwitter } from 'assets/icon-twitter.svg';
import { LocalGithubUser } from 'types/user';
import styles from './UserInfo.module.scss';
import InfoItem, { InfoItemProps } from '../InfoItem/InfoItem';

interface UserInfoProps
  extends Pick<LocalGithubUser, 'blog' | 'company' | 'location' | 'twitter'> {}

const UserInfo: FC<UserInfoProps> = ({ blog, company, location, twitter }) => {
  const items: InfoItemProps[] = [
    {
      icon: <IconLocation />,
      text: location,
    },
    {
      icon: <IconWeb />,
      text: blog,
      isLink: true,
    },
    {
      icon: <IconTwitter />,
      text: twitter,
      isLink: true,
    },
    {
      icon: <IconCompany />,
      text: company,
    },
  ];
  return (
    <div className={styles.userInfo}>
      {items.map((item, index) => (
        <InfoItem {...item} key={index} />
      ))}
    </div>
  );
};

export default UserInfo;
