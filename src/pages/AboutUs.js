import React from "react";
import CustomContainer from "../components/CustomContainer";
import { Col, ListGroup, Row, Stack, Image } from "react-bootstrap";
import backgroundImage from '../assets/image/mission.jpg';
import image1 from '../assets/image/image3.jpg';
import image2 from '../assets/image/heritage.jpg';
const AboutUs = () => {
  return (
    <>
      <Stack style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '400px' }}>
        {/* Your content goes here */}
      </Stack>
      <Stack className="">
        <CustomContainer width="1080px" sectionClass="py-4 py-md-5">
          <Stack as="h1" className="ff-sour fw-medium fs-1 text-black">
            Our Mission
          </Stack>
          <Stack className="ff-lato fw-medium fs-6 text-black pt-2">
            Houston Ghanaian SDA Church is a group that falls under the
            world wide Seventh-Day Adventist Church to share the advent
            message of Jesus Christ, the Son of the living God with other
            believers in Ghanaian communities in the Houston Metropolis.
            In our effort to spread the love of Jesus it is our mission to
            lift Christ in our community by reaching out to brothers and
            sisters of Seventh - day Adventist background who are
            searching for a church home.
          </Stack>

          <Row className="pt-4 my-auto">
            <Col lg={6}>
            <Image
                src={image1}
                title="Past Event"
                alt="Past Event"
                loading="lazy"
                className="object-fit-cover w-100 aboutImg1" />
            </Col>
            <Col lg={6}>
              <Stack as="div" className="d-flex row-gap-2">
                <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                  Seventh day Adventist message reached Gold Coast now Ghana
                  in 1888 when Francis I. U. Dolphijn a Ghanaian who lived
                  at Apam received the Sabbath message through a pamphlet
                  from the International Tract Society. One William Kweku
                  Attah Dawson of Fetteh and Mayenda, also in Fantiland, is
                  said to have either preceded Dolphijn as first Adventist,
                  or even the one who introduced Adventism to Dolphijn.
                </Stack>
                <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                  In 1893, the General Conference of SDA church officially
                  dispatched the first missionary from America to Gold
                  Coast. The missionaries Karl G. Rudolph and E. L Sanford
                  arrived at Apam. In 1894, the Gold Coast mission of SDA
                  was established with the head quarters at Cape Coast which
                  happened to be the head quarters of the SDA mission for
                  West Africa. By this time Adventism had gained root in
                  Gold Coast.
                </Stack>
                <Stack
                  as="p"
                  className="ff-lato fw-medium fs-6 text-black d-block"
                >
                  In 1914, W. H. Lewis, the first president of Gold Coast
                  mission travelled to Kumasi, Asante in search of permanent
                  head quarters. On November 1914, he chose Agona Asante as
                  the missionary heardquarters after he had been heartily
                  accepted by Nana Kwame Boakye I chief of Agona. In 1915,
                  marked the beginning of pioneering work in Asante. Much
                  work was done by Lewis and his team which included J.K
                  Gabra in Asant area especially Ntonso, Wiamoase, Asamang
                  etc. Tradition holds that Lewis even met a Sabbath keeping
                  family at Wiamoase when he officially sent the Adventist
                  message to the place. (Source:
                  <Stack
                    as="a"
                    className="d-inline mx-1 text-black"
                    style={{ width: "max-content" }}
                    href="http://www.cgcsda.org/our-history/"
                  >
                    Central Ghana Conference of SDA
                  </Stack>
                  , Ghana)
                </Stack>
              </Stack>
            </Col>
          </Row>

          <Stack as="div" className="d-flex flex-column row-gap-3 pt-4">
            <Stack as="h2" className="ff-sour fw-medium fs-1">
              Historical Dateline of Adventism in Ghana
            </Stack>

            <ListGroup
              as="ul"
              className="custom-list d-flex flex-column row-gap-2"
            >
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1888, the first Advent message in the form of a
                pamphlet reached one Francis I. U. Dolphijn of Apam, a
                coastal town in Fantiland in the central regions of the
                then Gold Coast, now Ghana.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                Feb. 22, 1894: The first SDA missionaries, Edward L.
                Sanford and Karl G. Rudolph, arrived at Apam. Within
                five months frequent attacks of malaria forced Sanford's
                departure; but Rudolf continued and moved the Cape
                Coast.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                On Oct. 3, 1895, Cape Coast became the official
                headquarters of the Seventh-day Adventist Church in West
                Africa as a team, headed by Dudley Upton Hale of Texas
                who led a group of missionaries to Cape Coast the same
                year. Dudley U. Hale (the new mission superintendent)
                arrived with George and Eva Kerr (both nurses), and G.
                P. Riggs (a colporteur). They met Rudolph, who had
                previously moved there from Apam. On June 3, 1897, Hale
                left for home.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                Before the close of the 19th century, a team of
                Adventist missionaries arrived at Apam, Ghana from the
                General Conference to begin what is now known as the
                Seventh-day Adventist Church in Ghana. They were Karl G.
                Rudolph and Edward Leroy Sanford. Sanford returned to
                America due to ill-health.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In March 1903 Hale returned to Ghana with his family and
                Mr. and Mrs. J. M. Hyatt.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In August 1905, the headquarters of the work in West
                Africa moved from Cape Coast, Ghana, to Freetown, Sierra
                Leone with the arrival of David C. Babcock and his
                family.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                February 1907 was the beginning of Adventist education
                as it was the year in which Christian Ackah (Snr) of
                Kikam, who had identified himself with Adventism in 1903
                established the first school based on Adventist
                principles in Cape Coast.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                C. A. Ackah introduced Adventism to his hometown Kikam
                in 1907. Kikam became the headquarters for the church
                work in Ghana from 1908.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In September 1908 the first official SDA School which
                was built by C. A. Ackah started to function at Kikam.
                Among the students were S. B. Essien, J. B. Arthur & J.
                W. Quarshie. The first Teachers included J. D. Hayford,
                F. Dolphijn, J. A Bonnie, S. D. Morgue and J. K.
                Garbrah.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                April 1915 marked the beginning of official pioneering
                work at Agona, in Asante, led by William Lewis. He was
                joined there later on by J. K. Garbrah as his assistant.
                Garbrah had been transferred from Axim after Lewis had
                gone there to re-organize and strengthen the work there.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                1915: The paramount chief of Agona, Nana Kwame Boakye,
                gave a larger plot of land, where Lewis erected a house
                and a school building with the assistance of the chief
                and his people. In the school there, which became the
                center of a group of schools, J. K. Garbrah, H. E.
                Boyce, J. J. Hyde, H. K. Munson, F. L. Stokes, and F.
                Edwards taught at various times.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1918, the work in West Africa was organized with
                headquarters in Waterloo, Sierra Leone. L. F. Langford
                was made the General Superintendent of the work in West
                Africa.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                On 7 May 1921, J. K. Garbrah of Shama, became the first
                Ghanaian minister of the Gospel to be ordained into the
                Gospel Ministry of the Seventh-day Adventist Church.
                This took place in Waterloo, Sierra Leone at a General
                Conference session.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                Late 1922, L. F. Langford came to Gold Coast (Ghana) and
                took over the work as acting director. While still the
                general superintendent of the work in West Africa.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1923, L. F. Langford transferred the West African
                Headquarters from Waterloo, Sierra Leone to Agona, Gold
                Coast (Ghana). At the same time, he became the Director
                of the Ghana Mission.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1924, the joint headquarters of the West African
                Field and the Ghana Mission under the leadership of L.
                F. Langford moved from Agona to Kumase and the joint
                office became officially known as West African Union
                Mission.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1927, J. J. Hide, the new superintendent of the Ghana
                Mission transferred the headquarters of the church from
                Kumase to Agona once again. He preferred there to
                Kumase.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1933, the Mission, then based at Bekwae, was
                re-organized with a new name, Gold Coast Union Mission
                covering five territories in West Africa. These were
                Gold Coast, Ivory Coast, Dahomey, Togoland, and Upper
                Volta with Jesse Clifford as the Director. He was also
                the Director of the Ghana Mission.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                1938 marked the beginning if the Printing works in
                Ghana. F.L. Stokes invited Emmanuel T. Abbey from Accra
                then resident in Bawjiase to man the press at Asokore,
                Koforidua.. That was the beginnings of the Advent Press.
                The press later moved to Bekwae, was taken to Nigeria
                and was finally settled in Accra.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1939, the first SDA Teacher Training College was
                established at Bekwae with C. A. Bartlett, a British
                Missionary as the first Principal.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                January, 1946: The West African Union Mission which had
                Willian McClements as Superintendent and was based in
                Ibadan, Nigeria, moved headquarters to Ghana. Jesse O.
                Gibson who was the Director of the Ghana Mission was
                made the head of the new headquarters at Osu, Accra.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                1955: To meet the medical needs of the people, the Kwahu
                Hospital was established at Atibie by Dr. J. A. Hyde and
                was officially opened on July 28, 1957: later a School
                of Nursing was begun and a midwifery course offered.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In 1970, Ghana Mission was re-organized into Ghana
                Conference of SDA with J. K. Amoah as the first
                President. Kumasi remained the headquarters of this
                first local Conference of the church in the West African
                Union Mission and the whole of black Africa.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                On October 8, 1974, the Adventist Girls' Vocational
                Institute was opened in Techiman, Brong Ahafo region, as
                a day school by action of the Ghana Conference and the
                West African Union Mission, with Mrs. Emelia Kusi as
                headmistress.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                1979: The Adventist Missionary College was established
                at Adentan in Accra. In the late 1980s, it took on the
                name - Valley View College and then Valley View
                University. It is the first accredited and chartered
                private tertiary University in Ghana. The first Director
                was W. S. Whaley and the current President is Seth A.
                Laryea, who has led the university since 1995.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In January, 2000, the West African Union Mission was
                re-organized with Ghana being organized into Ghana Union
                Conference; Accra was maintained as the headquarters and
                P. O. Mensah, the first President.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                2000: The rest of the West African Union Mission
                territory, which included Liberia Mission, Sierra Leone
                Mission and the Gambia Mission Station, was re-organized
                and remained as West African Union Mission. The
                headquarters was moved to Monrovia, Liberia with Carlyle
                M. Bayne as acting President.
              </ListGroup.Item>
              <ListGroup.Item
                as="li"
                className="ff-lato fw-medium fs-6 text-black p-0 border-0 rounded-0"
              >
                In December 2006, S. A. Larmie became the President of
                the Ghana Union Conference with six local conferences.
              </ListGroup.Item>
            </ListGroup>
          </Stack>
          
          <Image
            src={image2}
            title="Past Event"
            alt="Past Event"
            loading="lazy"
            className="object-fit-cover w-100 aboutImg2 pt-4" />

          <Stack as="div" className="d-flex row-gap-4 pt-4">
            <Stack as="div" className="d-flex row-gap-2">
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                Seventh-day Adventists accept the Bible as the only source
                of our beliefs. We consider our movement to be the result
                of the Protestant conviction Sola Scriptura—the Bible as
                the only standard of faith and practice for Christians.
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                Currently, Adventists hold 28 fundamental beliefs that can
                be organized into six categories—the doctrines of God,
                man, salvation, the church, the Christian life and last
                day events. In each teaching, God is the architect, who in
                wisdom, grace and infinite love, is restoring a
                relationship with humanity that will last for eternity.
              </Stack>
            </Stack>

            <Stack as="div" className="d-flex row-gap-2">
              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/god/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Loves
              </Stack>
              <Stack
                as="p"
                className="ff-lato fw-medium fs-6 text-black d-block"
              >
                God is love, power, and splendor—and God is a mystery. His
                ways are far beyond us, but He still reaches out to us.
                God is infinite yet intimate, three yet one, all-knowing
                yet all-forgiving.
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/god/"
                >
                  Find out more...
                </Stack>
              </Stack>

              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/humanity/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Creates
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                From neurons to nebulae, DNA to distant galaxies, we are
                surrounded by wonder. Yet the beauty is broken.{" "}
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/humanity/"
                >
                  Find out more...
                </Stack>
              </Stack>

              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/salvation/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Redeems
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                Love. Harmony. Perfection. Once, all creation sang the
                same glorious song.
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/salvation/"
                >
                  Find out more...
                </Stack>
              </Stack>

              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/church/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Inhabits
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                Jesus left His followers with an epic mission: tell the
                world of His love and His promise to return. Also, they
                should love people the way He loved them.
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/church/"
                >
                  Find out more...
                </Stack>
              </Stack>

              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/living/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Transforms
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                God’s law in the Ten Commandments show us how to live and
                make clear our need for Jesus. Though the law shows us the
                path to follow and convicts us of sin, it’s about far more
                than just toeing the line.{" "}
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/living/"
                >
                  Find out more...
                </Stack>
              </Stack>

              <Stack
                as="a"
                href="http://www.adventist.org/beliefs/apocalypse/"
                className="ff-sour fw-bold fs-5 text-black"
              >
                We believe that God Triumphs
              </Stack>
              <Stack as="p" className="ff-lato fw-medium fs-6 text-black">
                From the Garden of Eden to the Tower of Babel, the
                destruction of Sodom to the Exodus from Egypt, God has
                always investigated before taking action.
                <Stack
                  as="a"
                  className="mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="hthttp://www.adventist.org/beliefs/apocalypse/"
                >
                  Find out more...
                </Stack>
              </Stack>
            </Stack>

            <Stack as="div" className="d-flex row-gap-2">
              <Stack as="h2" className="ff-sour fw-medium fs-1">
                28 Fundamental Beliefs
              </Stack>
              <Stack
                as="p"
                className="ff-lato fw-medium fs-6 text-black d-block"
              >
                Seventh-day Adventists accept the Bible as their only
                creed and hold certain fundamental beliefs to be the
                teaching of the Holy Scriptures. These beliefs, as set
                forth here, constitute the church’s understanding and
                expression of the teaching of Scripture. Revision of these
                statements may be expected at a General Conference session
                when the church is led by the Holy Spirit to a fuller
                understanding of Bible truth or finds better language in
                which to express the teachings of God’s Holy Word.
              </Stack>
            </Stack>

            <Stack as="div" className="d-flex row-gap-2">
              <Stack
                as="p"
                className="ff-lato fw-medium fs-6 text-black d-block"
              >
                <Stack
                  as="a"
                  className="d-inline me-2 mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/fileadmin/adventist.org/files/articles/official-statements/28Beliefs-Web.pdf"
                >
                  Click here
                </Stack>
                for the 28 Fundamental Beliefs
              </Stack>
              <Stack
                as="p"
                className="ff-lato fw-medium fs-6 text-black d-block"
              >
                <Stack
                  as="a"
                  className="d-inline me-2 mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/beliefs/"
                >
                  Click here
                </Stack>
                to find out more about Seventh-day Adventists
              </Stack>
              <Stack
                as="p"
                className="ff-lato fw-medium fs-6 text-black d-block"
              >
                <Stack
                  as="a"
                  className="d-inline me-2 mt-1 fw-bold text-black"
                  style={{ width: "max-content" }}
                  href="http://www.adventist.org/information/church-manual/"
                >
                  Click here
                </Stack>
                for the Seventh-day Adventist Church Manual
              </Stack>
            </Stack>
          </Stack>
        </CustomContainer>
      </Stack>
    </>
  );
};

export default AboutUs;
