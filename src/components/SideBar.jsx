import { BsPlus, BsFillLightningFill, BsGearFill } from 'react-icons/bs'
import { FaFire, FaPoo } from 'react-icons/fa'

const SideBar = () => {
    return (
        <div className="dark:bg-gray-900 fixed left-0 top-0 flex h-screen w-16 flex-col bg-white shadow-lg">
            <SideBarIcon icon={<FaFire size="28" />} />
            <Divider />
            <SideBarIcon icon={<BsPlus size="32" />} />
            <SideBarIcon icon={<BsFillLightningFill size="20" />} />
            <SideBarIcon icon={<FaPoo size="20" />} />
            <Divider />
            <SideBarIcon icon={<BsGearFill size="22" />} />
        </div>
    )
}

const SideBarIcon = ({ icon, text = 'tooltip 💡' }) => (
    <div className="sidebar-icon group">
        {icon}
        <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
    </div>
)

const Divider = () => <hr className="sidebar-hr" />

export default SideBar
