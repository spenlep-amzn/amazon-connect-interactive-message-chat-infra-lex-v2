/*AMAZON CONNECT TEMPLATE TYPES FOR INTERACTIVE MESSAGING*/
const TEMPLATE_TYPES = {
  LISTPICKER: "ListPicker",
  TIMEPICKER: "TimePicker",
  QUICK_REPLIES: "QuickReply",
  CAROUSEL: "Carousel",
};

/*IMAGES USED FOR INTERACTIVE MESSAGES*/
//Image urls need to be changed after we get a new S3 bucket in prod to host images and other resources
const IMAGE_URLS = {
  BILLING:
    "https://amazon-connect-interactive-message-blog-assets.s3-us-west-2.amazonaws.com/interactive-images/billing.jpg",
  NEW_SERVICE:
    "https://amazon-connect-interactive-message-blog-assets.s3-us-west-2.amazonaws.com/interactive-images/new_service.jpg",
  CANCELLATION:
    "https://amazon-connect-interactive-message-blog-assets.s3-us-west-2.amazonaws.com/interactive-images/cancel.jpg",
  COMPANY:
    "https://amazon-connect-interactive-message-blog-assets.s3-us-west-2.amazonaws.com/interactive-images/company.jpg",
};

/*FULFILLMENT STATES FOR AMAZON LEX BOT INTENTS*/
const FULFILLMENT_STATES = {
  FULFILLED: "Fulfilled",
  FAILED: "FAILED",
};

/*SLOTS SUPPORTED IN AMAZON LEX CHAT BOT*/
const SLOTS = {
  ACTION: "action",
  INTERACTIVE_OPTION: "interactiveOption",
  DEPARTMENT: "department",
  APPOINTMENT: "appointment",
  EXPERIENCE: "experience",
  TRAVEL: "travel"
};


/*VALUES SUPPORTED IN THE DEPARTMENT SLOT*/
const DEPARTMENT_SLOT = {
  BILLING: "Billing",
  CANCELLATION: "Cancellation",
  NEW_SERVICE: "New Service",
};

/*ACTIONS THAT A USER CAN TAKE */
const ACTIONS = {
  TEST_INTERACTIVE: "Check self-service options",
  CONTINUE_TO_AGENT: "Talk to an agent",
  END_CHAT: "End chat",
};

/*SELF-SERVICE OPTIONS WHEN USER SELECTS "CHECK SELF-SERVICE OPTIONS" AS AN ACTION*/
const TEST_INTERACTIVE_OPTIONS = {
  DEPARTMENT_WITH_MULTIPLE_IMAGES: "Choose a department",
  SIMPLE_TIMEPICKER: "Schedule a meeting with an agent",
  RATE_EXPERIENCE_REPLIES: "Rate my experience",
  TRAVEL_CAROUSEL: "View travel destinations"
};


/*MAPPING SELF-SERVICE OPTIONS TO AMAZON LEX BOT SLOTS*/
const TEST_INTERACTIVE_OPTIONS_SLOTS = {
  DEPARTMENT_WITH_MULTIPLE_IMAGES: SLOTS.DEPARTMENT,
  SIMPLE_TIMEPICKER: SLOTS.APPOINTMENT,
  INVALID: SLOTS.DEPARTMENT,
  DEPARTMENT_LISTPICKER: SLOTS.DEPARTMENT,
  RATE_EXPERIENCE_REPLIES: SLOTS.EXPERIENCE,
  TRAVEL_CAROUSEL: SLOTS.TRAVEL,
};

/*MAPPING SELF-SERVICE OPTIONS TO INTERACTIVE MESSAGE TEMPLATES*/
const TEST_INTERACTIVE_OPTIONS_TEMPLATES = {
  INVALID: {},
  DEPARTMENT_LISTPICKER: {
    templateType: TEMPLATE_TYPES.LISTPICKER,
    version: "1.0",
    data: {
      content: {
        title: "Which department would you like?",
        subtitle: "Tap to select option",
        elements: [
          {
            title: DEPARTMENT_SLOT.BILLING,
            subtitle: "For billing issues",
          },
          {
            title: DEPARTMENT_SLOT.NEW_SERVICE,
            subtitle: "For new service",
          },
          {
            title: DEPARTMENT_SLOT.CANCELLATION,
            subtitle: "For new service requests",
          },
        ],
      },
    },
  },
  SIMPLE_TIMEPICKER: {
    templateType: TEMPLATE_TYPES.TIMEPICKER,
    version: "1.0",
    data: {
      content: {
        title: "Schedule appointment",
        subtitle: "Tap to select option",
        timeslots: [
          {
            date: "2020-10-31T18:00+00:00",
            duration: 60,
          },
          {
            date: "2020-10-15T13:00+00:00",
            duration: 60,
          },
          {
            date: "2020-10-15T16:00+00:00",
            duration: 60,
          },
        ],
      },
    },
  },
  DEPARTMENT_WITH_MULTIPLE_IMAGES: {
    templateType: TEMPLATE_TYPES.LISTPICKER,
    version: "1.0",
    data: {
      content: {
        title: "Which department do you want to select?",
        subtitle: "Tap to select option",
        imageType: "URL",
        imageData: IMAGE_URLS.COMPANY,
        elements: [
          {
            title: DEPARTMENT_SLOT.BILLING,
            subtitle: "Request billing information",
            imageType: "URL",
            imageData: IMAGE_URLS.BILLING,
          },
          {
            title: DEPARTMENT_SLOT.NEW_SERVICE,
            subtitle: "Set up a new service",
            imageType: "URL",
            imageData: IMAGE_URLS.NEW_SERVICE,
          },
          {
            title: DEPARTMENT_SLOT.CANCELLATION,
            subtitle: "Request a cancellation",
            imageType: "URL",
            imageData: IMAGE_URLS.CANCELLATION,
          },
        ],
      },
    },
  },
  RATE_EXPERIENCE_REPLIES: {
    templateType: TEMPLATE_TYPES.QUICK_REPLIES,
    version: "1.0",
    data: {
      content: {
        title: "How was your experience?",
        elements: [
          {
            "title": "Very unsatisfied",
          },
          {
            "title": "Unsatisfied"
          },
          {
            "title": "Neutral"
          },
          {
            "title": "Satisfied"
          },
          {
            "title": "Very Satisfied"
          }
        ]
      }
    }
  },
  TRAVEL_CAROUSEL: {
    templateType: TEMPLATE_TYPES.CAROUSEL,
    version: "1.0",
    data: {
      content: {
        title: "Select a destination:",
        elements: [
          {
            "templateType": TEMPLATE_TYPES.LISTPICKER,
            "templateIdentifier": "template0",
            "version": "1.0",
            "data": {
              "content": {
                "title": "Explore our travel options:",
                "subtitle": "Select an option:",
                "imageType": "URL",
                "imageData": "https://www.usnews.com/object/image/00000173-fe24-d76b-a773-fe3679d20000/200817-planesky-stock.jpg?update-time=1597696716591&size=responsive640",
                "elements": [
                  {
                    "title": "Purchase Ticket",
                  },
                  {
                    "title": "View All Destinations",
                  },
                  {
                    "title": "Learn More",
                    "type": "hyperlink",
                    "url": "https://github.com/amazon-connect/amazon-connect-chat-interface",
                  }
                ]
              }
            }
          },
          {
            "templateType": TEMPLATE_TYPES.LISTPICKER,
            "templateIdentifier": "template0",
            "version": "1.0",
            "data": {
              content: {
                title: "Explore Hotel destinations",
                subtitle: "Select an option:",
                imageType: "URL",
                imageData: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/22/a1/9c/80/essentia-luxury-hotel.jpg?w=700&h=-1&s=1",
                elements: [
                  {
                    title: "Book Room",
                  },
                  {
                    title: "View All Listings",
                  },
                  {
                    title: "Learn More",
                    "type": "hyperlink",
                    "url": "https://github.com/amazon-connect/amazon-connect-chat-interface",
                  },
                ],
              }
            }
          },
          {
            "templateType": TEMPLATE_TYPES.LISTPICKER,
            "templateIdentifier": "template0",
            "version": "1.0",
            "data": {
              content: {
                title: "Explore dining options",
                subtitle: "Select an option:",
                imageType: "URL",
                imageData: "https://t3.ftcdn.net/jpg/02/27/62/24/360_F_227622470_sJ3yEaz44RK7UrWNaGdSn7azgeRu9UDs.jpg",
                elements: [
                  {
                    title: "Book Table",
                  },
                  {
                    title: "View Popular Entrees",
                  },
                  {
                    title: "Learn More",
                    "type": "hyperlink",
                    "url": "https://github.com/amazon-connect/amazon-connect-chat-interface",
                  },
                ],
              }
            }
          },
          {
            "templateType": TEMPLATE_TYPES.LISTPICKER,
            "templateIdentifier": "template0",
            "version": "1.0",
            "data": {
              "content": {
                "title": "Explore our travel options:",
                "subtitle": "Select an option:",
                "imageType": "URL",
                "imageData": "https://media.istockphoto.com/photos/young-woman-pulling-suitcase-in-airport-terminal-copy-space-picture-id1173736603?b=1&k=20&m=1173736603&s=612x612&w=0&h=1V_XBSWHppXzMQIzkyG6drqgrEl_prEogWXjbN7Gxwo=",
                "elements": [
                  {
                    "title": "Purchase Ticket",
                  },
                  {
                    "title": "View All Destinations",
                  },
                  {
                    title: "Learn More",
                    "type": "hyperlink",
                    "url": "https://github.com/amazon-connect/amazon-connect-chat-interface",
                  },
                ]
              }
            }
          },
          {
            "templateType": TEMPLATE_TYPES.LISTPICKER,
            "templateIdentifier": "template0",
            "version": "1.0",
            "data": {
              content: {
                title: "Hotel Gabonzo Suite",
                subtitle: "Select an option:",
                imageType: "URL",
                imageData: "https://media.istockphoto.com/id/929135598/photo/santorini-greece-picturesq-view-of-traditional-cycladic-santorini-houses-on-small-street-with.jpg?s=612x612&w=0&k=20&c=Z8R8IPtjYfk8gc5Q-1Q4jD1coUgqu5vuTezM2ONRUPA=",
                elements: [
                  {
                    title: "Book Tour",
                  },
                  {
                    title: "View Ratings",
                  },
                  {
                    title: "Open Gallery",
                    "type": "hyperlink",
                    "url": "https://github.com/amazon-connect/amazon-connect-chat-interface",
                  },
                ],
              }
            }
          },
        ]
      }
    }
  }
};

module.exports = {
  FULFILLMENT_STATES,
  SLOTS,
  TEMPLATE_TYPES,
  ACTIONS,
  TEST_INTERACTIVE_OPTIONS,
  TEST_INTERACTIVE_OPTIONS_SLOTS,
  TEST_INTERACTIVE_OPTIONS_TEMPLATES,
};