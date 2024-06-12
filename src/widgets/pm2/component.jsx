/* eslint-disable camelcase */
import {useTranslation} from "next-i18next";
import useWidgetAPI from "utils/proxy/use-widget-api";
import Block from "../../components/services/widget/block";


export default function Component({ service }) {
  const { t } = useTranslation();

  const { widget } = service;

  const { data: activityData, error: activityError } = useWidgetAPI(widget, "get_activity", {
    refreshInterval: 5000,
  });

  return <>{activityData && activityData.length>0 && activityData.map((info,index)=>
    <>
    <div style={{display:'flex'}}>
      <Block label={`App#${index+1}   ${info.name} `}/>
      <Block label="status" value={info?.pm2_env?.status} />
      <Block label="cpu" value={`${info.monit?.cpu} %`} />
      <Block label="memory" value={`${Math.round(info.monit?.memory/1024/1024)} MB`} />
    </div>
    </>
  )}</>

}
