function MenuBar() {
  return(
    <Bar>
      <BarButton></BarButton>

    </Bar>
  )
}

const Bar = styled.div`
width: 866px;
height:37px;
top: 214px;
left: 323px;
padding: 10px;
gap: 10px;
border-radius: 6px;
opacity: 0px;
display: flex;
`

const BarButton = styled.div`
`

export default MenuBar;