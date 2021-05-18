import {
  Chat,
  EmojiFlags,
  ExpandMoreOutlined,
  LocalHospital,
  People,
  Storefront,
  VideoLibrary,
} from '@material-ui/icons';
import React from 'react';
import {useStateValue} from '../contextApi/StateProvider';
import './Sidebar.css';
import SidebarRow from './SidebarRow/SidebarRow';

function Sidebar() {
  const [{user}, dispatch] = useStateValue();
  return (
    <div className="sidebar">
      <SidebarRow src={user.photoURL} title={user.displayName} />
      <SidebarRow Icon={LocalHospital} title="COVID-19 Information Center" />
      <SidebarRow Icon={EmojiFlags} title="pages" />
      <SidebarRow Icon={People} title="Friends" />
      <SidebarRow Icon={Chat} title="Messanger" />
      <SidebarRow Icon={Storefront} title="Marketplace" />
      <SidebarRow Icon={VideoLibrary} title="Videos" />
      <SidebarRow Icon={ExpandMoreOutlined} title="More" />
    </div>
  );
}

export default Sidebar;
