module.exports = {
  "SEO_FRAGMENT": `
    fragment SeoFields on Seo{
      hide
      title
      description
      image{
        title
        url
      }
    }`,
  "SPEAKER_FRAGMENT": `
    fragment SpeakerFields on Speaker{
      name
      surname
      job
      image{
        title
        url
      }
    }`,
  "LANDING_PAGE_FIELDS": `
    introText
    introSecondaryText
    newsletterForm{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    landingFaqsCollection{
      items{
        text{
          json
        }
      }
    }
    ctaPartnership{
      text{
        json
      }
    }`,
  "HOME_PAGE_FIELDS": `
    subtitle
    vimeoUrl
    introText
    initialDescription{
      text{
        json
        links{
          entries{
            hyperlink{
              ...on Page{
                sys{
                  id
                }
                slug
              }
            }
          }
        }
      }
    }
    textBlocksCollection(limit: 5){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }
    newsletterForm{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    speakersTitle
    speakersCollection{
      items{
        name
        surname
        job
        image{
          url
          title
        }
      }
    }
    tedBlock{
      image{
        url
        title
      }
      text{
        json
        links{
          entries{
            hyperlink{
              ...on Page{
                sys{
                  id
                }
                slug
              }
            }
          }
        }
      }
    }`,
  "TED_PAGE_FIELDS": `
    pageName
    title
    textBlocksCollection(limit: 4){
      items{
        image{
          url
          title
        }
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }`,
  "EVENT_PAGE_FIELDS": `
    pageName
    title
    vimeoUrl
    textBlocksCollection(limit: 10){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }`,
  "CONTACTS_PAGE_FIELDS": `
    title`,
  "PARTNERSHIP_PAGE_FIELDS": `
    introText
    ctaText
    form{
      title
      buttonText
      privacyPage{
        slug
      }
    }
    faqsCollection(limit: 6){
      items{
        text{
          json
          links{
            entries{
              hyperlink{
                ...on Page{
                  sys{
                    id
                  }
                  slug
                }
              }
            }
          }
        }
      }
    }`,
  "PRIVACY_POLICY_FIELDS": `
    title
    text{
      json
    }`,
  "NEWSLETTER_SUCCESS_PAGE": `
    buttonText
    content{
      json
    }`
}