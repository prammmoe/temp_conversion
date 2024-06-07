import React from "react";
import {
  FluentProvider,
  Card,
  CardHeader,
  Body1,
  Caption1,
  Select,
  Input,
  CardFooter,
  Button,
} from "@fluentui/react-components";
import { ConvertRangeRegular } from "@fluentui/react-icons";
import "./App.css";
import useConverter from "./utils/useConverter";
import { useState } from "react";

const option = [
  {
    id: 1,
    label: "celcius to fahrenheit",
    value: "celcius",
    symbol: "c",
  },
  {
    id: 2,
    label: "fahrenheit to celcius",
    value: "fahrenheit",
    symbol: "f",
  },
];

export default function App() {
  const [temperatureType, setTemperatureType] = useState("celcius");
  const [temperatureInput, setTemperatureInput] = useState(0);
  const [temperature, handleTemperature] = useConverter(
    temperatureInput,
    temperatureType
  );

  // Fallback values for environment variables in case import.meta.env is not available (e.g., during testing)
  const webTitle = import.meta.env.VITE_WEB_TITLE || "Temperature Converter";
  const webDescription = import.meta.env.VITE_WEB_DESCRIPTION;
  ("Convert temperatures between Celcius and Fahrenheit");

  return (
    <FluentProvider theme={webLightTheme}>
      <Card style={{ width: 400 }}>
        <CardHeader
          header={
            <Body1>
              <b>{webTitle}</b>
            </Body1>
          }
          description={<Caption1>{webDescription}</Caption1>}
        />
        <Select onChange={({ target }) => setTemperatureType(target.value)}>
          {option.map((selection, index) => (
            <option key={index} value={selection.value}>
              {selection.label}
            </option>
          ))}
        </Select>
        <Input
          placeholder="input suhu"
          type="number"
          onChange={(e) => setTemperatureInput(e.target.value)}
        />
        <CardFooter>
          <Button
            icon={<ConvertRangeRegular fontSize={16} />}
            className="btn__convert"
            onClick={handleTemperature}
          >
            Convert
          </Button>
          <Input
            value={`${temperature}° `}
            disabled
            className="input__result"
          />
        </CardFooter>
      </Card>
    </FluentProvider>
  );
}
