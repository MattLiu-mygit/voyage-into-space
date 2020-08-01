import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as costActions from '../../redux/actions/costActions';
import * as fuelAmountActions from '../../redux/actions/fuelAmountActions';
import * as rocketFuelActions from '../../redux/actions/rocketFuelActions';
import * as equipmentCostActions from '../../redux/actions/equipmentCostActions';
import * as settlersActions from '../../redux/actions/settlersActions';
import * as oxygenActions from '../../redux/actions/oxygenActions';

const Liftoff = (props) => {
  const [screen, setScreen] = useState(1);

  useEffect(() => {
    if (screen === 1) {
      setTimeout(() => {
        setScreen(screen + 1);
      }, 10000);
    }
    if (screen !== 4) {
      props.actions.setEquipmentCost(
        Math.round(props.settlers * 0.5 + props.settlers / 10)
      );
    }
    if (screen === 4) {
      setTimeout(() => {
        setScreen(5);
        props.setOff();
      }, 3000);
    }
  }, [props.settlers, screen]);

  const handleFuelMinusOne = () => {
    props.actions.setFuelAmount(props.fuelAmount - 10);
    props.actions.setRocketFuel(props.rocketFuel - 10);
    props.actions.setCost(props.cost - 500 * 10);
  };
  const handleFuelPlusOne = () => {
    props.actions.setFuelAmount(props.fuelAmount + 10);
    props.actions.setRocketFuel(props.rocketFuel + 10);
    props.actions.setCost(props.cost + 500 * 10);
  };
  const handleFuelMinusTen = () => {
    props.actions.setFuelAmount(props.fuelAmount - 100);
    props.actions.setRocketFuel(props.rocketFuel - 100);
    props.actions.setCost(props.cost - 500 * 100);
  };
  const handleFuelPlusTen = () => {
    props.actions.setFuelAmount(props.fuelAmount + 100);
    props.actions.setRocketFuel(props.rocketFuel + 100);
    props.actions.setCost(props.cost + 500 * 100);
  };

  const handleSettlersMinusOne = () => {
    props.actions.setRocketFuel(Math.round(props.rocketFuel - 1.07 * 7));
    props.actions.setFuelAmount(Math.round(props.fuelAmount - 1.07 * 7));
    props.actions.setSettlers(props.settlers - 1);
    props.actions.setCost(props.cost + 1000000 + 3745);
    props.actions.setEquipmentCost(props.equipmentCost - 0.5);
    props.actions.setOxygen(props.oxygen - 0.5);
  };
  const handleSettlersPlusOne = () => {
    if (props.settlers < 100) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel + 1.07 * 7));
      props.actions.setFuelAmount(Math.round(props.fuelAmount + 1.07 * 7));
      props.actions.setSettlers(props.settlers + 1);
      props.actions.setCost(props.cost - 1000000 - 3745);
      props.actions.setEquipmentCost(props.equipmentCost + 0.5);
      props.actions.setOxygen(props.oxygen + 0.5);
    } else {
      alert('No more than 100 settlers per ride!');
    }
  };
  const handleSettlersMinusTen = () => {
    props.actions.setRocketFuel(Math.round(props.rocketFuel - 1.07 * 70));
    props.actions.setFuelAmount(Math.round(props.fuelAmount - 1.07 * 70));
    props.actions.setSettlers(props.settlers - 10);
    props.actions.setCost(props.cost + 10000000 + 37450);
    props.actions.setEquipmentCost(props.equipmentCost - 5);
    props.actions.setOxygen(props.oxygen - 5);
  };
  const handleSettlersPlusTen = () => {
    if (props.settlers < 100) {
      props.actions.setRocketFuel(Math.round(props.rocketFuel + 1.07 * 70));
      props.actions.setFuelAmount(Math.round(props.fuelAmount + 1.07 * 70));
      props.actions.setSettlers(props.settlers + 10);
      props.actions.setCost(props.cost - 10000000 - 37450);
      props.actions.setEquipmentCost(props.equipmentCost + 5);
      props.actions.setOxygen(props.oxygen + 5);
    } else {
      alert('No more than 100 settlers per ride!');
    }
  };

  const handleOxygenMinusOne = () => {
    props.actions.setOxygen(props.equipmentCost - 0.5);
    props.actions.setCost(props.cost - 1750);
    props.actions.setRocketFuel(Math.round(props.rocketFuel - 0.5 * 7));
    props.actions.setFuelAmount(Math.round(props.fuelAmount - 0.5 * 7));
  };
  const handleOxygenPlusOne = () => {
    props.actions.setOxygen(props.equipmentCost + 0.5);
    props.actions.setCost(props.cost + 1750);
    props.actions.setRocketFuel(Math.round(props.rocketFuel + 0.5 * 7));
    props.actions.setFuelAmount(Math.round(props.fuelAmount + 0.5 * 7));
  };
  const handleOxygenMinusTen = () => {
    props.actions.setOxygen(props.equipmentCost - 5);
    props.actions.setCost(props.cost - 17500);
    props.actions.setRocketFuel(Math.round(props.rocketFuel - 0.5 * 70));
    props.actions.setFuelAmount(Math.round(props.fuelAmount - 0.5 * 70));
  };
  const handleOxygenPlusTen = () => {
    props.actions.setOxygen(props.equipmentCost + 5);
    props.actions.setCost(props.cost + 1750);
    props.actions.setRocketFuel(Math.round(props.rocketFuel + 0.5 * 70));
    props.actions.setFuelAmount(Math.round(props.fuelAmount + 0.5 * 70));
  };

  const handleContinue = () => {
    setScreen(screen + 1);
  };

  return (
    <>
      {screen === 1 ? (
        <>
          <p>Nice! It's now time to load our rocket!</p>
          <p>
            For every tonne of cargo, the rocket requires 7 tonnes of
            propellent, 0.5 tons of oxygen and 0.5 tons of food per person, 1
            ton of colonizing supplies per 10 people, and each tonne of
            propellent is $500 so balance your costs wisely!
          </p>
        </>
      ) : screen === 2 ? (
        <>
          <p>Add in resources below!</p>
          <p>Fuel</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button onClick={handleFuelMinusTen}>-100</button>
            <button onClick={handleFuelMinusOne}>-10</button>
            <button onClick={handleFuelPlusOne}>+10</button>
            <button onClick={handleFuelPlusTen}>+100</button>
          </div>
          <p>Settlers (0.07 tonnes)</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button onClick={handleSettlersMinusTen}>-10</button>
            <button onClick={handleSettlersMinusOne}>-1</button>
            <button onClick={handleSettlersPlusOne}>+1</button>
            <button onClick={handleSettlersPlusTen}>+10</button>
          </div>
          <button onClick={handleContinue}>Continue</button>
        </>
      ) : screen === 3 ? (
        <>
          <p>Oxygen in reserve</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button onClick={handleOxygenMinusTen}>-5</button>
            <button onClick={handleOxygenMinusOne}>-0.5</button>
            <button onClick={handleOxygenPlusOne}>+0.5</button>
            <button onClick={handleOxygenPlusTen}>+5</button>
          </div>
          <p>Scientific equipment</p>
          <div style={{ fontSize: '0.75vw' }}>
            <button
              onClick={() => {
                props.actions.setEquipmentCost(props.equipmentCost - 1);
                props.actions.setCost(props.cost - 3500);
                props.actions.setRocketFuel(Math.round(props.rocketFuel - 7));
                props.actions.setFuelAmount(Math.round(props.fuelAmount - 7));
              }}
            >
              -1
            </button>
            <button
              onClick={() => {
                props.actions.setEquipmentCost(props.equipmentCost + 1);
                props.actions.setCost(props.cost + 3500);
                props.actions.setRocketFuel(Math.round(props.rocketFuel + 7));
                props.actions.setFuelAmount(Math.round(props.fuelAmount + 7));
              }}
            >
              +1
            </button>
          </div>
          <button
            onClick={() => {
              setScreen(screen + 1);
            }}
          >
            Blast Off!
          </button>
        </>
      ) : screen === 4 ? (
        <>
          <div>Epic! We're ready to blast off!</div>
        </>
      ) : null}
    </>
  );
};

function mapStateToProps(state) {
  return {
    cost: state.cost,
    fuelAmount: state.fuelAmount,
    settlers: state.settlers,
    equipmentCost: state.equipmentCost,
    rocketFuel: state.rocketFuel,
    oxygen: state.oxygen,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      setCost: bindActionCreators(costActions.setCost, dispatch),
      setFuelAmount: bindActionCreators(
        fuelAmountActions.setFuelAmount,
        dispatch
      ),
      setRocketFuel: bindActionCreators(
        rocketFuelActions.setRocketFuel,
        dispatch
      ),
      setEquipmentCost: bindActionCreators(
        equipmentCostActions.setEquipmentCost,
        dispatch
      ),
      setSettlers: bindActionCreators(settlersActions.setSettlers, dispatch),
      setOxygen: bindActionCreators(oxygenActions.setOxygen, dispatch),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Liftoff);
