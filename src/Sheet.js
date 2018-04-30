import React, { Component } from "react";
import GoogleSpreadsheet from "google-spreadsheet";
import async from "async";

// spreadsheet key is the long id in the sheets URL
/*----- STARTER DEV -----*/
// var doc = new GoogleSpreadsheet("1sgISr3IwWqxLkspSneN0Avzwpid1dTcR55HcgQz2vn0");
/*----- PINE RIVER VALLEY -----*/
var doc = new GoogleSpreadsheet("15a5U-ihd17i8WC6TRORxwOYATFNMtUEDkun3UOi799I");

var sheet;
var sheets;

var WelcomeData = {
  visitor: '',
  company: ''
};

export default class GoogleAPI extends Component {
  componentDidMount() {
    let updateDatabase = this.props.setDatabase;

    async.series(
      [
        function getInfoAndWorksheets(step) {
          // console.log(terst, test);
          doc.getInfo(function(err, info) {
            // console.log(
            //   "Loaded doc: " + info.title + " by " + info.author.email
            // );

            sheets = info.worksheets;

            function whois({ displayName, fullName: { firstName: name } }) {
              // console.log(displayName + " is " + name);
            }
            step();
          });
        },

        /* ----- build meta ----- */
        function buildMeta(step) {
          sheets[0].getRows(
            {
              offset: 1
            },
            function(err, rows) {
              console.log(rows);
              const lastItem = rows.length -1;
              WelcomeData = {
                ...WelcomeData,
                visitor: rows[lastItem].visitor,
                company: rows[lastItem].company
              };
              step();
            }
          );
        },
      ],
      function(err, database) {
        if (err) {
          console.log(err);
        } else {
          updateDatabase(WelcomeData);
          // console.log("database", WelcomeData);
        }
      }
    );
  }

  render() {
    return <div />;
  }
}