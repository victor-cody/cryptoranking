//redux state management
import { useSelector, useDispatch } from "react-redux";
import { toggleNavBar } from "../../redux/navBarState";

import { Button } from "antd";
import { AlignRightOutlined, CloseOutlined } from "@ant-design/icons";

const ToggleNavBtn = () => {
  const showNavBar = useSelector((state) => state.navBarState.showNavBar);
  const dispatch = useDispatch();

  return (
    <Button
      className="lg:!hidden text-lg focus:bg-transparent !border-none bg-transparent sm:!block"
      onClick={(e) => {
        e.preventDefault();
        dispatch(toggleNavBar());
      }}
    >
      {showNavBar ? (
        <CloseOutlined
          className="focus:bg-transparent bg-transparent"
          style={{ color: "#fff" }}
        />
      ) : (
        <AlignRightOutlined
          className="focus:bg-transparent bg-transparent"
          style={{ color: "#fff" }}
        />
      )}
    </Button>
  );
};

export default ToggleNavBtn;
