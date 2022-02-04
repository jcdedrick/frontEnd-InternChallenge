const SoloPost = (item) ={'>'} {

    return ={'>'} (
      <Flex
        direction="column"
        align={"center"}
        textAlign={"left"}
        width="50%"
        marginTop="10%"
        marginLeft="10%"
      >
        <Box
          padding="0.7rem"
          borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
          borderWidth="1px"
          width="100%"
          align={"center"}
          bg={colorMode === "light" ? "#ffffff" : "#282424"}
        >
          <h1
            style={{
              fontFamily: "Roboto",
              fontWeight: "bold",
              fontSize: "24px",
            }}
          >
            {item.title}
          </h1>
        </Box>

        <Image src={item.url} alt={item.title}></Image>

        <Box
          padding="0.7rem"
          borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
          borderWidth="1px"
          width="100%"
          align={"center"}
          bg={colorMode === "light" ? "#ffffff" : "#282424"}
        >
          <Flex justify="space-between">
            <Circle
              //bg="tomato"
              borderColor={colorMode === "light" ? "#dbdbdb" : "#3f3f40"}
              borderWidth="2px"
            >
              <Heart isClick={Like} onClick={() => setClick(!Like)} />
            </Circle>
            <Flex>
              <h1
                style={{
                  fontFamily: "Roboto",
                  // fontWeight: "bold",
                  // fontSize: "18px",
                }}
              >
                {item.date}
              </h1>
            </Flex>
          </Flex>
          <p
            style={{
              textAlign: "left",
            }}
          >
            {item.explanation}
          </p>
        </Box>
      </Flex>
    );
  {'}'};
