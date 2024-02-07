import React from "react"
import Link from "next/link"
import classes from "../aboutus/index.module.css"
import { teamDetails } from "../../public/data"
const about = () => {
  return (
    <div className={classes.container}>
      <ul>
        {teamDetails.map((dev) => (
          <li>
            <Link href={`/aboutus/${dev.id}`}>{dev.name}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default about
