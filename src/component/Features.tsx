import React from "react";
import { CheckBoxIcon, StarIcon, StarFillIcon } from "./ui";
import { MdLibraryAdd } from "react-icons/md";

export const Features = () => {
  return (
    <div>
      <ul>
        <li>
          <a href="#features">Features</a>
        </li>
        <li>
          <a href="#sort-setting">Sort Setting</a>
        </li>
        <li>
          <a href="#faq">Frequently Asked Questions</a>
        </li>
      </ul>
      <p>
        This is a simple TODO app built using Typescript. I have created this
        project using VIM editor.
      </p>
      <h2 id="features">Features</h2>
      <ul>
        <li>Search/Create list.</li>
        <li>Add items to list.</li>
        <li>
          <CheckBoxIcon /> Check/uncheck item.
        </li>
        <li>
          <StarIcon /> Mark items as important.
        </li>
        <li>Each list shows when the list was last updated.</li>
        <li>
          <MdLibraryAdd /> Move lists around by using drag handle.
        </li>
        <li>Delete list would prompt user for confirmation.</li>
        <li>Deleting and creating list shows alert.</li>
      </ul>
      <h2 id="sort-setting">Sort Setting</h2>
      <p>
        There is a setting option on bottom right corner. - Sort by None,
        Important <StarFillIcon /> or pending <CheckBoxIcon /> options.
      </p>
      <h2 id="faq">Frequently Asked Questions</h2>
      <p>
        <strong>Question: </strong>Where does my list get saved?
        <br />
        <strong>Answer: </strong>It uses localStorage of your browser, which
        means all data is local.
        <br />
        <strong>Question: </strong>What are the supported browsers?
        <br />
        <strong>Answer: </strong>I have tested this on chrome.
      </p>
    </div>
  );
};
