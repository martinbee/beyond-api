import liftOrder from '../data/liftOrder';

export default function isEndOfMesocycle(week, liftType) {
  const isLastWeekOfCycle = week === 3;
  const isLastLiftOfCycle = liftOrder.indexOf(liftType) === liftOrder.length - 1;

  return isLastWeekOfCycle && isLastLiftOfCycle;
}
