import { useContext } from "react";
import moment from "moment";
import { MonitoringContext } from "../../contexts/monitoringContext";
import "./infoMeasure.css";
import { backgroundPH } from "./backgroundPH";
import { backgroundFe } from "./backgroundFe";
import { backgroundClo } from "./backgroundClo";
import { backgroundAmoni } from "./backgroundAmoni";
import { backgroundDo } from "./backgoundDo";

export default function InfoMeasure() {
  const { infoMeasureOfLocation } = useContext(MonitoringContext);

  return (
    infoMeasureOfLocation && (
      <div className="info__measure">
        <div style={{ paddingLeft: "10px", fontSize: "18px" }}>
          Thời gian quan trắc (mới nhất):
          <span
            style={{
              color: "blue",
              paddingLeft: "10px",
            }}
          >
            {moment(infoMeasureOfLocation.createdAt).format(
              "HH:mm:ss - MM/DD/YYYY"
            )}
          </span>
        </div>
        {/* refactoring  */}
        <div className="info__measure-table">
          <table>
            <tr style={{ backgroundColor: "rgb(211 204 204)" }}>
              <th>TT</th>
              <th>Thông số</th>
              <th>Giá trị</th>
              <th>Đơn vị</th>
            </tr>
            <tr>
              <td>1</td>
              <td>pH</td>
              <td
                style={{
                  backgroundColor: backgroundPH(infoMeasureOfLocation.ph),
                }}
              >
                {infoMeasureOfLocation.ph}
              </td>
              <td></td>
            </tr>
            <tr>
              <td>2</td>
              <td>Sắt (Fe)</td>
              <td
                style={{
                  backgroundColor: backgroundFe(
                    infoMeasureOfLocation.fe ? infoMeasureOfLocation.fe : 0.5
                  ),
                }}
              >
                {infoMeasureOfLocation.fe ? infoMeasureOfLocation.fe : 0.5}
              </td>
              <td>mg/l</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Clorua (Cl-)</td>
              <td
                style={{
                  backgroundColor: backgroundClo(infoMeasureOfLocation.clorua),
                }}
              >
                {infoMeasureOfLocation.clorua}
              </td>
              <td>mg/l</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Amoni (NH4+ tính theo N)</td>
              <td
                style={{
                  backgroundColor: backgroundAmoni(
                    infoMeasureOfLocation.amoni
                      ? infoMeasureOfLocation.amoni
                      : 0.6
                  ),
                }}
              >
                {infoMeasureOfLocation.amoni
                  ? infoMeasureOfLocation.amoni
                  : 0.6}
              </td>
              <td>mg/l</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Ôxy hòa tan (DO)</td>
              <td
                style={{
                  backgroundColor: backgroundDo(
                    infoMeasureOfLocation._do ? infoMeasureOfLocation._do : 5.5
                  ),
                }}
              >
                {infoMeasureOfLocation._do ? infoMeasureOfLocation._do : 5.5}
              </td>
              <td>mg/l</td>
            </tr>
          </table>
        </div>
      </div>
    )
  );
}
