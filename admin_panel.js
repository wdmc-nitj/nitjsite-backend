const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpress = require("@admin-bro/express");

const Faculty = require("./models/Faculty");
const Acadcord = require("./models/Acadcord");
const Activity = require("./models/Activity");
const HOD = require("./models/HodMessage");
const Hostel = require("./models/hostel");
const Infrastructure = require("./models/Infrastructure");
const PhdScholar = require("./models/PhdScholar");
const Placement = require("./models/Placement");
const Staff = require("./models/Staff");
const Student = require("./models/Student");

const Navbar = require("./models/navbar");
const Footer = require("./models/footer");
const Clubs = require("./models/club");
const News = require("./models/news");
const About = require("./models/about");
const AcademicCalendar = require("./models/academicCalendar");
const AcademicNotices = require("./models/academicnotices");
const Achievements = require("./models/Achievement");
const Administration = require("./models/administration");
const Alumni = require("./models/Alumni");
const Awards = require("./models/awardsAndHonors");
const InstituteProspectus = require("./models/instituteProspectusLink");
const LatestEvent = require("./models/latestEvent");
const NewPage = require("./models/newpage");
const Notice = require("./models/notice");
const Patent = require("./models/Patent");
const PhotoGallery = require("./models/photoGallery");
const PlacementStat = require("./models/placementStat");
const ProctorialCell = require("./models/proctorialCell");
const Publication = require("./models/publication");
const Ranking = require("./models/ranking");
const Research = require("./models/researchHighlights");
const Resource = require("./models/resource");
const StudentTeam = require("./models/studentTeam");
const Tender = require("./models/tender");
const Testimonial = require("./models/testimonial");
const Timeline = require("./models/timeline");
const upcommingEvent = require("./models/upcomingEvent");
const yearlyRanking = require("./models/yearlyRanking");

AdminBro.registerAdapter(AdminBroMongoose);
const AdminBroOptions = {
  resources: [
    About,
    Faculty,
    Acadcord,
    Activity,
    HOD,
    Hostel,
    Infrastructure,
    PhdScholar,
    Placement,
    Staff,
    Student,
    Navbar,
    Footer,
    Clubs,
    News,
    AcademicCalendar,
    AcademicNotices,
    Achievements,
    Administration,
    Alumni,
    Awards,
    Infrastructure,
    InstituteProspectus,
    LatestEvent,
    NewPage,
    Notice,
    Patent,
    PhdScholar,
    PhotoGallery,
    Placement,
    PlacementStat,
    ProctorialCell,
    Publication,
    Ranking,
    Research,
    Resource,
    Staff,
    Student,
    StudentTeam,
    Tender,
    Testimonial,
    Timeline,
    upcommingEvent,
    yearlyRanking,
  ],
};
const admin_panel = new AdminBro(AdminBroOptions);
const router = AdminBroExpress.buildRouter(admin_panel);

module.exports = { admin_panel, router };
