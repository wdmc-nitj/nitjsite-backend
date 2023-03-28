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
    {resource:Faculty,options:{navigation:'Academics'}},
    {resource:Staff,options:{navigation:'Academics'}},
    {resource:Student,options:{navigation:'Academics'}},
    {resource:HOD,options:{navigation:'Academics'}},
    {resource:PhdScholar,options:{navigation:'Academics'}},
    {resource:Placement,options:{navigation:'Academics'}},
    {resource:Acadcord,options:{navigation:'Academics'}},
    {resource:Activity,options:{navigation:'Academics'}},
    {resource:Infrastructure,options:{navigation:'Academics'}},

    {resource:Hostel,options:{navigation:'Hostel'}},
    
    {resource:Navbar,options:{navigation:'Website'}},
    {resource:Footer,options:{navigation:'Website'}},


    {resource:Clubs,options:{navigation:'Home'}},
    {resource:News,options:{navigation:'Home'}},
    {resource:About,options:{navigation:'About'}},
    {resource:AcademicCalendar,options:{navigation:'Academics'}},
    {resource:AcademicNotices,options:{navigation:'Academics'}},
    {resource:Achievements,options:{navigation:'Home'}},
    {resource:Administration,options:{navigation:'Administration'}},
    {resource:Alumni,options:{navigation:'Alumni'}},
    {resource:Awards,options:{navigation:'Home'}},
    {resource:InstituteProspectus,options:{navigation:'Home'}},
    {resource:LatestEvent,options:{navigation:'Home'}},
    
    {resource:Notice,options:{navigation:'Home'}},
    {resource:Patent,options:{navigation:'Home'}},
    {resource:PhotoGallery,options:{navigation:'Home'}},
    {resource:PlacementStat,options:{navigation:'Home'}},
    {resource:ProctorialCell,options:{navigation:'Home'}},
    {resource:Publication,options:{navigation:'Home'}},
    {resource:Ranking,options:{navigation:'Home'}},
    {resource:Research,options:{navigation:'Home'}},
    {resource:Resource,options:{navigation:'Home'}},
    {resource:StudentTeam,options:{navigation:'Home'}},
    {resource:Tender,options:{navigation:'Home'}},
    {resource:Testimonial,options:{navigation:'Home'}},
    {resource:Timeline,options:{navigation:'About'}},
    {resource:upcommingEvent,options:{navigation:'Home'}},
    {resource:yearlyRanking,options:{navigation:'Home'}},

  ],
};
const admin_panel = new AdminBro(AdminBroOptions);
const router = AdminBroExpress.buildRouter(admin_panel);

module.exports = { admin_panel, router };
