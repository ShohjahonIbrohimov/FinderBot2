import React from "react";
import { getBots, deleteBot, createBot } from "../../../api/calls/bot-settings";
import TableCRUD from "../../Reusable/TableCRUD";
import BotSettingsForm from "./BotSettingsForm";
const headerCols = ["Имя", "Имя пользователя"];
const bodyCols = ["first_name", "username"];

const BotSettings = ({}) => {
  return (
    <div>
      <TableCRUD
        title="Создать бота"
        headerCols={headerCols}
        bodyCols={bodyCols}
        getTableData={getBots}
        createTableData={createBot}
        Form={BotSettingsForm}
        handleDelete={deleteBot}
      ></TableCRUD>
    </div>
  );
};

export default BotSettings;
