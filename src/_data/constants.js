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
    introText
    initialDescription{
      text{
        json
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
    }`,
  "TED_PAGE_FIELDS": `
    title`,
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
    faqsCollection{
      items{
        text{
          json
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