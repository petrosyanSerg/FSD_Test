import { Button, Image } from "@mantine/core";

import errorIcon from "@shared/assets/images/icon-error.svg";
import refreshIcon from "@shared/assets/images/icon-retry.svg";
import { BigTitle } from "@shared/ui/BigTitle";

import "@widgets/SomethingWentWrong/index.scss";

export const SomethingWentWrong = () => (
  <div className="something-went-wrong">
    <Image src={errorIcon} alt="errorIcon" w={50} />
    <BigTitle text="Something went wrong" />
    <p className="something-went-wrong-description">
      We couldn’t connect to the server (API error). Please try again in a few moments.
    </p>
    <Button color="gray" radius="md" variant="outline" onClick={() => location.reload()}>
      <div className="something-went-wrong-button">
        <Image src={refreshIcon} alt="refresh" />
        Refresh
      </div>
    </Button>
  </div>
);
