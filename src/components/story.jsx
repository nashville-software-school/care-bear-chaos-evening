export const Story = ({
  adjective,
  weapon,
  emotion,
  sound,
  wrestler,
  noun,
}) => {
  return (
    <>
      <div id="story-block">
        <section>
          It was a {adjective ? adjective : "__________"} night in Care-a-Lot
          when Cheer Bear entered the ring, clutching a{" "}
          {weapon ? weapon : "__________"}.Across from them stood Grumpy Bear,
          visibly {emotion ? emotion : "__________"} and ready to rumble.
        </section>
        <section>
          Suddenly, the clouds burst with a deafening{" "}
          {sound ? sound : "__________"}, and{" "}
          {wrestler ? wrestler : "__________"} fell from the sky like a sparkly
          meteor. But instead of a smackdown, they all paused... and shared a{" "}
          {noun ? noun : "__________"}.
        </section>
        <section>
          The audience exploded with joy. Classic Care Bear chaos.
        </section>
      </div>
    </>
  )
}
