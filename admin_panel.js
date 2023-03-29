const AdminBro = require("admin-bro");
const AdminBroMongoose = require("@admin-bro/mongoose");
const AdminBroExpressjs = require('admin-bro-expressjs')

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
const DeptClub = require("./models/departmentClubs");
const DeptPub = require("./models/deptPublication");

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

const User = require("./models/AdminBroUser");
const { query } = require("express");
const { filter } = require("compression");


const canModifyUsers = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
const isAdmin = ({ currentAdmin }) => currentAdmin && currentAdmin.role === 'admin'
const canEditDept = ({ currentAdmin, record }) => {
  if (currentAdmin.role === 'admin') {
    return true;
  }
  if (!record) {
    return true
  }
  if (record) {
    return currentAdmin.department == record.param('department')
  }
}

AdminBro.registerAdapter(AdminBroMongoose);
const AdminBroOptions = {
  resources: [

    ////// Assessable By Department HOD ///// 
    {
      resource: Faculty, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Staff, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Student, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: HOD, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: PhdScholar, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Placement, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Acadcord, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Activity, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Infrastructure, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: DeptClub, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: DeptPub, options: {
        navigation: 'Academics', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: News, options: {
        navigation: 'Home', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                console.log(query_fetched)
                query_fetched['filters.sourceOfInfoDepartment'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },
    {
      resource: Achievements, options: {
        navigation: 'Home', actions: {
          edit: { isAccessible: canEditDept },
          delete: { isAccessible: canEditDept },
          list: {
            before: async (request, context) => {
              const { currentAdmin } = context
              query_fetched = { ...request.query }
              if (currentAdmin && currentAdmin.role === 'restricted') {     // to filter by department
                query_fetched['filters.department'] = currentAdmin.department
              }
              return {
                ...request,
                query: query_fetched
              }
            }, isAccessible: canEditDept
          },
          show: { isAccessible: canEditDept },
          bulkDelete: { isAccessible: canEditDept },
          new: { isAccessible: canEditDept },
        }
      }
    },

    /////////////////////////////////////////////

    ////// Assessable By Super Admin Only ///// 

    { resource: Hostel, options: { navigation: 'Hostel', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Navbar, options: { navigation: 'Website', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Footer, options: { navigation: 'Website', actions: { list: { isAccessible: isAdmin } } } },


    { resource: Clubs, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: About, options: { navigation: 'About', actions: { list: { isAccessible: isAdmin } } } },
    { resource: AcademicCalendar, options: { navigation: 'Academics', actions: { list: { isAccessible: isAdmin } } } },
    { resource: AcademicNotices, options: { navigation: 'Academics', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Administration, options: { navigation: 'Administration', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Alumni, options: { navigation: 'Alumni', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Awards, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: InstituteProspectus, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: LatestEvent, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },

    { resource: Notice, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Patent, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: PhotoGallery, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: PlacementStat, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: ProctorialCell, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Ranking, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Research, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Resource, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: StudentTeam, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Tender, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Testimonial, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Timeline, options: { navigation: 'About', actions: { list: { isAccessible: isAdmin } } } },
    { resource: upcommingEvent, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: yearlyRanking, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    { resource: Publication, options: { navigation: 'Home', actions: { list: { isAccessible: isAdmin } } } },
    {
      resource: User,
      options: {
        navigation: 'AdminPanelUsers',
        actions: {
          list: { isAccessible: isAdmin },
          new: {
            before: async (request) => {
              if (request.payload.record.password) {
                request.payload.record = {
                  ...request.payload.record,
                  password: request.payload.record.password,
                }
              }
              return request
            },
          },
          edit: { isAccessible: canModifyUsers },
          delete: { isAccessible: canModifyUsers },
          new: { isAccessible: canModifyUsers },
        }
      }
    }
  ],
};


const admin_panel = new AdminBro(AdminBroOptions);
// Build and use a router which will handle all AdminBro routes
const router = AdminBroExpressjs.buildAuthenticatedRouter(admin_panel, {
  authenticate: async (email, password) => {
    const user = await User.findOne({ email })
    if (user) {
      const matched = password == user.password
      if (matched) {
        return user
      }
    }
    return false
  },
  cookiePassword: 'some-secret-password-used-to-secure-cookie',
})


module.exports = { admin_panel, router };
