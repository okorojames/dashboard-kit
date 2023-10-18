import { Link } from "react-router-dom";
import Logo from "../../assets/images/logo1.png";
import { NavLink } from "react-router-dom";
import overviewIcon from "../../assets/images/overview.svg";
import ticketsIcon from "../../assets/images/tickets.svg";
import ideasIcon from "../../assets/images/ideas.svg";
import contactsIcon from "../../assets/images/contacts.svg";
import agentsIcon from "../../assets/images/agents.svg";
import articlesIcon from "../../assets/images/articles.svg";
import settingsIcon from "../../assets/images/settings.svg";
import subscriptionIcon from "../../assets/images/subscription.svg";

const Sidebar = () => {
  return (
    <div className=" bg-darkOne text-slate-50 pt-8 flex flex-col gap-12">
      <Link
        to="/"
        className="nav_logo flex px-6 items-center gap-8 w-full text-slate-400 transition duration-250 hover:text-slate-50"
      >
        <img src={Logo} alt="nav_logo" className=" w-12" />
        <p>Dashboard Kit</p>
      </Link>
      {/* sidebar links */}
      <div className="sidebar_links flex flex-col gap-8 border-b-2 border-b-gray-600 pb-16">
        <NavLink
          to="/overview"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={overviewIcon} alt="overview icon" className=" w-9" />
          <p>Overview</p>
        </NavLink>
        <NavLink
          to="/tickets"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={ticketsIcon} alt="tickets icon" className=" w-9" />
          <p>Tickets</p>
        </NavLink>
        <NavLink
          to="/ideas"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={ideasIcon} alt="ideas icon" className=" w-9" />
          <p>Ideas</p>
        </NavLink>
        <NavLink
          to="/contacts"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={contactsIcon} alt="contacts icon" className=" w-9" />
          <p>Contacts</p>
        </NavLink>
        <NavLink
          to="/agents"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={agentsIcon} alt="agents icon" className=" w-9" />
          <p>Agents</p>
        </NavLink>
        <NavLink
          to="/articles"
          className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
        >
          <img src={articlesIcon} alt="subscription icon" className=" w-9" />
          <p>Articles</p>
        </NavLink>
      </div>
      <NavLink
        to="/settings"
        className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
      >
        <img src={settingsIcon} alt="subscription icon" className=" w-9" />
        <p>Settings</p>
      </NavLink>
      <NavLink
        to="/subscription"
        className=" transition-all duration-300 flex items-center gap-6 text-slate-400 w-full hover:text-slate-50 hover:bg-greyOne py-3 px-8"
      >
        <img src={subscriptionIcon} alt="subscription icon" className=" w-9" />
        <p>Subscription</p>
      </NavLink>
      <div></div>
    </div>
  );
};

export default Sidebar;
