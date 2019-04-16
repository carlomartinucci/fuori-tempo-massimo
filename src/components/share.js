import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  FacebookShareButton,
  // FacebookShareCount,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  RedditShareButton,
  TelegramShareButton,
  EmailShareButton,
} from "react-share"

import "../scss/share.scss"

// <FacebookShareCount url={url} />
const Share = ({ url, title, description, twitter }) => (
  <div className="share-links">
    <FacebookShareButton quote={title} url={url}>
      <FontAwesomeIcon icon={["fab", "facebook-f"]} />
    </FacebookShareButton>

    <TwitterShareButton url={url} title={title} via={twitter}>
      <FontAwesomeIcon icon={["fab", "twitter"]} />
    </TwitterShareButton>

    <LinkedinShareButton url={url} title={title} description={description}>
      <FontAwesomeIcon icon={["fab", "linkedin-in"]} />
    </LinkedinShareButton>

    <RedditShareButton url={url} title={title}>
      <FontAwesomeIcon icon={["fab", "reddit-alien"]} />
    </RedditShareButton>

    <WhatsappShareButton url={url} title={title}>
      <FontAwesomeIcon icon={["fab", "whatsapp"]} />
    </WhatsappShareButton>

    <TelegramShareButton url={url} title={title}>
      <FontAwesomeIcon icon={["fab", "telegram"]} />
    </TelegramShareButton>

    <EmailShareButton
      url={url}
      subject={title}
      body={`${url} - ${description}`}
    >
      <FontAwesomeIcon icon={["fas", "envelope"]} />
    </EmailShareButton>
  </div>
)

export default Share
