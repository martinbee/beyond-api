import liftOrder from '../data/liftOrder';

export default function getNextLiftType(lastLiftType) {
  const lastLiftTypeIndex = liftOrder.indexOf(lastLiftType);
  const restartOrder = lastLiftTypeIndex === liftOrder.length - 1;

  if (restartOrder) return liftOrder[0];

  const nextLiftType = liftOrder[lastLiftTypeIndex + 1];

  return nextLiftType;
}
