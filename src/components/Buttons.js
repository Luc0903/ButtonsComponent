import Btn from "./Btn";
import Cart from "../images/round_add_shopping_cart_white_24dp.png";

export default function Buttons() {
  return (
    <main className="grid-item2">
      <h1 className="button__title">Buttons</h1>
      <div className="buttons__grid">
        <div className="buttons__grid-1">
          <div>
            <h6 className="buttons__title">{"<Button />"}</h6>
            <Btn classType="default">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="default-hover">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button variant="outline" /'}</h6>
            <Btn classType="outline">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="outline-hover">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button variant="text" />'}</h6>
            <Btn classType="text">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="text-hover">Default</Btn>
          </div>
        </div>
        <div className="buttons__grid-2">
          <div>
            <h6 className="buttons__title">{"<Button disableShadow />"}</h6>
            <Btn classType="disableShadow">Default</Btn>
          </div>
        </div>
        <div className="buttons__grid-3">
          <div>
            <h6 className="buttons__title">{"<Button disabled />"}</h6>
            <Btn classType="disabled">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">
              {'<Button variant="text" disabled />'}
            </h6>
            <Btn classType="disabledText">Default</Btn>
          </div>
        </div>
        <div className="buttons__grid-4">
          <div>
            <h6 className="buttons__title">
              {'<Button startIcon="local_grocery_store" />'}
            </h6>
            <Btn classType="cartButton">
              <img className="cartImageL" src={Cart} alt="cart" />
              Default
            </Btn>
          </div>
          <div>
            <h6 className="buttons__title">
              {'<Button endIcon="local_grocery_store" />'}
            </h6>
            <Btn classType="cartButton">
              Default
              <img className="cartImageR" src={Cart} alt="cart" />
            </Btn>
          </div>
        </div>
        <div className="buttons__grid-5">
          <div>
            <h6 className="buttons__title">{'<Buttons size="sm" />'}</h6>
            <Btn classType="sm">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button size="md" />'}</h6>
            <Btn classType="md">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Buttons size="lg" />'}</h6>
            <Btn classType="lg">Default</Btn>
          </div>
        </div>
        <div className="buttons__grid-6">
          <div>
            <h6 className="buttons__title">{'<Button color="default" />'}</h6>
            <Btn classType="default">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button color="primary" />'}</h6>
            <Btn classType="primary">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button color="secondary" />'}</h6>
            <Btn classType="secondary">Secondary</Btn>
          </div>
          <div>
            <h6 className="buttons__title">{'<Button color="danger" />'}</h6>
            <Btn classType="danger">Danger</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="default-hover">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="primary-hover">Default</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="secondary-hover">Secondary</Btn>
          </div>
          <div>
            <h6 className="buttons__light">{"&:hover, &:focus"}</h6>
            <Btn classType="danger-hover">Danger</Btn>
          </div>
        </div>
        <footer>
          <p className="buttons__light">
            Icons: https://material.io/resources/icons/?style=round
          </p>
          <p className="author">
            created by <span className="author-bold">lucio vasquez</span> -
            devChallenges.io
          </p>
        </footer>
      </div>
    </main>
  );
}
